module.exports = function (err) {
  console.log(err.message, err);

  throw new Error(err.message);
};
