import * as Yup from "yup";
const emailRegx =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const LoginValidation = Yup.object({
    emailOrphoneNumber: Yup.string()
    .email("Invalid email address")
    .matches(emailRegx, "Check your email format")
    .required("Please enter your email"),
  password: Yup.string()
    .min(5, "minimum 5 characters required")
    .max(14, "maximum 14 characters")
    .required("Please enter your password"),
});

export default LoginValidation
