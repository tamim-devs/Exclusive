const { aleaRNGFactory } = require("number-generator");

const otpgenerator = () => {
  console.log(aleaRNGFactory(Date.now()));
  
  const { uInt32 } = aleaRNGFactory(Date.now());
  return uInt32().toString().slice(0, 4);
};

module.exports = { otpgenerator };