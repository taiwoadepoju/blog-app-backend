const randomize = require('randomatic');
const VerificationToken = require('../models/verificationTokens');
const timeZone = require('../utils/timeZoneUtil');
const EmailSender = require('./emailController');

module.exports = {
  async createToken(user) {
    const verificationToken = new VerificationToken({
      userId: user._id,
      updatedAt: timeZone(),
      token: randomize('0', 6),
    });
    await verificationToken.save();
    EmailSender.newUser(user, verificationToken.token);
  },

  async createResetPasswordToken(user) {
    const verificationToken = new VerificationToken({
      userId: user._id,
      updatedAt: timeZone(),
      token: randomize('0', 6),
    });
    await verificationToken.save();
    EmailSender.resetPasswordToken(user, verificationToken.token);
  },

};
