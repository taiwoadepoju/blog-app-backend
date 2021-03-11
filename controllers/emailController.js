const sgMail = require('@sendgrid/mail');
const config = require('../config/constants');

sgMail.setApiKey(config.SENDGRID_API_KEY);

const sendEmail = (message) => {
  sgMail
    .send(message)
    .then(() => {
      console.log('Email sent ==>', message);
    })
    .catch((error) => {
      console.log('Sendgrid error =>:', error.response.body);
    });
};

module.exports = {
  newUser(user, token) {
    const message = {
      to: user.email,
      from: { email: 'maseapplication@gmail.com', name: 'Blog App' },
      subject: 'Blog App: Confirm your email address',
      html: `
        <h2>Hello ${user.firstName},</h2>
        <p>Your account has been created on the Blog App. Please use the code below to activate your account</p>
        <h2>
          ${token}
        </h2>
        <p>Cheers.</p>
      `,
    };
    sendEmail(message);
  },

  activatedUser(user) {
    const message = {
      to: user.email,
      from: { email: 'maseapplication@gmail.com', name: 'Blog App' },
      subject: 'Blog App: Activation Successful',
      html: `
        <h2>Hello ${user.firstName},</h2>
        <p>Your account has been activated on the Blog App.</p>
        <p>Please contact our support team if you have any enquiries</p>
        <p>Cheers!</p>
      `,
    };
    sendEmail(message);
  },

  resendToken(user, token) {
    const message = {
      to: user.email,
      from: { email: 'maseapplication@gmail.com', name: 'Blog App' },
      subject: 'Blog App: New Activation Code',
      html: `
        <h2>Hello ${user.firstName},</h2>
        <p>Please use the code below to activate your account. The code would expire in 24 hours.</p>
        <h6>
          ${token}
        </h6>
        <p>Cheers!</p>
      `,
    };
    sendEmail(message);
  },

  resetPasswordToken(user, token) {
    const message = {
      to: user.email,
      from: { email: 'maseapplication@gmail.com', name: 'Blog App' },
      subject: 'Blog App: Reset Your Password',
      html: `
        <h2>Hello ${user.firstName},</h2>
        <p>Please use the code below to reset your password. The code would expire in 24 hours.</p>
        <p>
          <h6>
            ${token}
          </h6>
        </p>
        <p>Cheers!</p>
      `,
    };
    sendEmail(message);
  },

  successfulPasswordReset(user) {
    const message = {
      to: user.email,
      from: { email: 'maseapplication@gmail.com', name: 'Blog App' },
      subject: 'Blog App: Password Reset Complete',
      html: `
        <h2>Hello ${user.firstName},</h2>
        <p>Your password has just been reset. If you did not initiate the request please contact our support now.</p>
        <p>Cheers!</p>
      `,
    };
    sendEmail(message);
  },
};
