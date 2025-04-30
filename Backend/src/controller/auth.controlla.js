const { apiResponse } = require("../utilities/apiResponse");
const { apiError } = require("../utilities/apiError.js");
const userModel = require("../model/user.model.js");
const { sendMail } = require("../helpers/nodemailer");

const {
  emailChecker,
  passwordCheker,
  bdNumberChecker,
  otpChecker,
} = require("../utilities/cheker.js");
const { otpgenerator } = require("../helpers/OtpGenerator.js");
const { makeHaspassword, compareHashpassword } = require("../helpers/brypt.js");

const regestration = async (req, res) => {
  try {
    const {
      firstName,
      email,
      phoneNumber,
      address1,
      password,
      lastName,
      address2,
    } = req.body;

    if (!firstName || !email || !phoneNumber || !address1 || !password) {
      return res
        .status(401)
        .json(new apiResponse(401, null, null, ` User Creadeantial Missing`));
    }

    if (
      !emailChecker(email) ||
      // ?TODO: uncomment the password checker
      // !passwordCheker(password) ||
      !bdNumberChecker(phoneNumber)
    ) {
      return res
        .status(401)
        .json(new apiError(401, null, null, `Invalid User Creadeantial`));
    }

    // check isAlreadyExistuser in database

    const isAlreadyExituser = await userModel.find({
      $or: [
        { firstName: firstName },
        { email: email },
        { phoneNumber: phoneNumber },
      ],
    });
    if (isAlreadyExituser?.length) {
      return res
        .status(401)
        .json(
          new apiError(
            401,
            null,
            null,
            ` Already exist in user try another email`
          )
        );
    }

    const haspassword = await makeHaspassword(password);

    // make otp generator
    const Otp = otpgenerator();
    // send a verify email

    const messageId = await sendMail(firstName, Otp, email);

    if (messageId) {
      // now save the userinformation into database
      const saveUserInfo = await userModel.create({
        firstName,
        email,
        phoneNumber,
        address1,
        password: haspassword,
        ...(lastName && { lastName }),
        ...(address2 && { adress2: address2 }),
      });

      const updatedUser = await userModel
        .findOneAndUpdate(
          { email: email },
          {
            otp: Otp,
            otpExpireDate: new Date().getTime() + 2 * 60 * 1000,
          },
          {
            new: true,
          }
        )
        .select("-email -phoneNumber -role -createdAt -otp");
      console.log(updatedUser);

      return res
        .status(200)
        .json(
          new apiResponse(200, "Registraion Sucessfull", updatedUser, false)
        );
    }
  } catch (error) {
    return res
      .status(500)
      .json(
        new apiError(500, null, null, `Registraion controller Error : ${error}`)
      );
  }
};

// login controller
const login = async (req, res) => {
  try {
    const { emailOrphoneNumber, password } = req.body;
    if (!emailOrphoneNumber || !password) {
      return res
        .status(400)
        .json(new apiError(400, null, null, `Email or password Invalid`));
    }
    // check is email / phone number is correct or not
    const checkisRegistredUser = await userModel.find({
      $or: [{ email: emailOrphoneNumber }, { password: password }],
    });
    console.log(checkisRegistredUser);
  } catch (error) {
    return res
      .status(500)
      .json(new apiError(500, null, null, `Login controller Error: ${error}`));
  }
};

const otp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp || !emailChecker(email) || !otpChecker(otp)) {
      return res
        .status(400)
        .json(new apiError(400, null, null, `Email or otp Invalid`));
    }
  } catch (error) {
    console.log("Error from otp controller", error);
    return res
      .status(500)
      .json(new apiError(500, null, null, `Otp controller Error: ${error}`));
  }
};

const userAuth = async (req, res) => {
  try {
    const { user } = req.body;
    return res
      .status(200)
      .json(new apiResponse(200, "User Auth Sucessfull", user, false));
  } catch (error) {
    console.log("Error from userAuth controller", error);
    return res
      .status(500)
      .json(
        new apiError(500, null, null, `userAuth controller Error: ${error}`)
      );
  }
};

module.exports = { regestration, login, otp, userAuth };
