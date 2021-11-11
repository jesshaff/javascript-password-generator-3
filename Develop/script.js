// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = document.getElementById("password");
// Set variables
var abcUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcLowercase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "0123456789";
var specialChars = "!@#$%^&*()_+,-=+`~[]{}/";

// Prompt for user to begin selecting criteria to generate password
window.onload = alert("Welcome! Select 'Generate Password' to generate your random password! :)")

// Verification that Generate Password button works 
function generatePassword() {
  console.log("The 'Generate Password' button has been clicked.");
  /* Prompt the user for password criteria 
    length between 8-128, lowercase, uppercase, numeric, special characters */
  var length = parseInt(prompt("How many characters would you like your password to contain? Must be between 8 and 128 characters."));

  if (length < 8) {
    alert('The password must be at least 8 characters.');
    return "Password will generate and display here once more than 8 characters is selected.";
    }
  if (length > 128) {
    alert('The password must be less than 128 characters.');
    return "Password will generate and display here once less than 128 characters is selected.";
    }
  /* Validate the input */

  /* Display password to the page */

  return "Password will generate and display here once required criteria is selected"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
