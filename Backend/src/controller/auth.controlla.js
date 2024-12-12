const {apiResponse} = require('../utilities/apiResponse')
const {apiError} = require('../utilities/apiError.js')
const userModel = require('../model/user.model.js')

const {
  emailChecker,
  passwordCheker,
  bdNumberChecker,
} = require('../utilities/cheker.js')

const regestration = async (req,res)=>{
  try {
    const {
      firstName,
      email,
      phoneNumber,
      adress1,     
      password,
      lastName,
      adress2
    } = req.body;

    if (!firstName || !email || !phoneNumber || !adress1 || !password ) {
      return res
      .status(401)
      .json(new apiResponse(401, null, null, ` User Creadeantial Missing`))
    }

    if(!emailChecker(email) || !passwordCheker(password) || !bdNumberChecker(phoneNumber)){
      return res
      .status(401)
      .json(new apiError(401, null, null, ` Email format Invalid Missing`))
    }

    // check is Already in database

    const isAlreadyExituser = await userModel.find({
      $or:[{firstName: firstName},{email:email},{phoneNumber:phoneNumber}]
    })
   if (isAlreadyExituser?.length) {
    return res
    .status(401)
    .json(new apiError(401, null, null, ` Already exist in user try another email`))

   }
    
    // Now save the user informs
    await userModel.create({
      firstName,
      email,
      phoneNumber,
      adress1,
      password,
      ...(lastName && {lastName: lastName}),
      ...(adress2 && {adress2: adress2}),
    }
  
  );
  
  // send a verify email
  (async () => {
    const { sendMail } = require('../helpers/nodemailer');
    await sendMail();
    console.log(sendMail);
    
  })();
    return res
    .status(200)
    .json(new apiResponse(200, null, null, `Regestration Sucessfull`))

  } catch (error) {

    return res
    .status(500)
    .json(new apiError(500, null, null, `Regestration Controlla Error : ${error}`))
  }
}

module.exports = {regestration}