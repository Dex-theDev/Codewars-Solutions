/*
Your job is to create a simple password validation function, as seen on many websites.

The rules for a valid password are as follows:

    There needs to be at least 1 uppercase letter.
    There needs to be at least 1 lowercase letter.
    There needs to be at least 1 number.
    The password needs to be at least 8 characters long.

You are permitted to use any methods to validate the password.

*/


function password(str) {
    //validate password
  let upperCase = 0
  let lowerCase = 0
  let number  = 0
  let isValid
  for(i = 0; i < str.length; i++){
   if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90){
     upperCase++
   }
    if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122){
      lowerCase++
    }
    if(str.charCodeAt(i) >= 48 && str.charCodeAt(i) <= 57){
       number++
       }
  }
  if(lowerCase && upperCase && number > 0 && str.length >= 8){
    isValid = true
  } else {
    isValid = false
  }
  return isValid
}
console.log(password("abcd1234"))