// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");
// Set variables
var abcUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcLowercase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var specialChars = "!@#$%^&*()_+,-=+`~[]{}/";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
