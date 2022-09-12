import { EmailValidatorAdapter } from "./validation/email-validator-adapter";


export const validateEmail = (emailValidator: EmailValidatorAdapter, email: string) => {
  if(emailValidator.isEmail(email)) {
    console.log("Email is valid ");
  }else{
    console.log("Email is invalid");
  }
}