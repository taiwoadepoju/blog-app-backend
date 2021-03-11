const moment = require('moment');
const randomize = require('randomatic');
const VerificationToken = require('../models/verificationTokens');
const User = require('../models/user');
const timeZone = require('../utils/timeZoneUtil');
const EmailSender = require('../controllers/emailController');

module.exports = {
  async updateToken(args) {
    const { token } = args;
    const verificationToken = await VerificationToken.findOneAndUpdate({ token }, {
      updatedAt: timeZone(),
      token: randomize('0', 6),
      expiryDate: moment(timeZone()).add(24, 'hours'),
    }, { new: true });

    if (!verificationToken) throw new Error('Token does not exist!');

    const user = await User.findOne({ _id: verificationToken.userId });
    if (!user) throw new Error('User not found');

    EmailSender.resendToken(user, verificationToken.token);
  },

  async confirmToken(args) {
    const { token } = args;
    const verificationToken = await VerificationToken.findOne({ token });
    if (!verificationToken) throw new Error('Invalid Token');

    if (verificationToken.activated) throw new Error('Email has been activated!');

    if (Date.now() > verificationToken.expiryDate) throw new Error('Token has expired!');

    const user = await User.findByIdAndUpdate(verificationToken.userId, {
      enabled: true,
      emailConfirmed: true,
    });

    await VerificationToken.findOneAndUpdate({ token }, {
      activated: true,
    });

    EmailSender.activatedUser(user);
  },

};
