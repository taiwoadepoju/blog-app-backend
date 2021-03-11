const Joi = require('joi');

module.exports = {
  createUser(req) {
    const schema = Joi.object({
      firstName: Joi.string().min(2).max(50).required(),
      lastName: Joi.string().min(2).max(50).required(),
      phone: Joi.string().min(9).max(15).required(),
      email: Joi.string().email().min(5).max(100)
        .required(),
      password: Joi.string().min(6).max(30).required(),
    });

    const { error } = schema.validate(req);
    if (error) {
      throw new Error(error.details[0].message);
    }
  },

  editUser(req) {
    const schema = {
      firstName: Joi.string().min(2).max(50).required(),
      lastName: Joi.string().min(2).max(50).required(),
      phone: Joi.string().min(9).max(15).required(),
    };

    const { error } = Joi.validate(req.body, schema);
    if (error) {
      throw new Error(error.details[0].message);
    }
  },

  changeUserActivationStatus(req) {
    const schema = { enabled: Joi.boolean().required() };
    const { error } = Joi.validate(req.body, schema);
    if (error) {
      throw new Error(error.details[0].message);
    }
  },
};
