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
  // Prompt the user for password length criteria 
  var length = parseInt(prompt("How many characters would you like your password to contain? Must be between 8 and 128 characters."));
    if (length < 8) {
      alert('The password must be at least 8 characters.');
      return "Password will generate and display here once more than 8 characters is selected.";
    }
    if (length > 128) {
      alert('The password must be less than 128 characters.');
      return "Password will generate and display here once less than 128 characters is selected.";
    }
  // Prompt the user for characters
  var includeUppercase = confirm("Do you want your password to include uppercase characters?");
  var includeLowercase = confirm("Do you want your password to include lowercase characters?");
  var includeNumeric = confirm("Do you want your password to include numeric characters?");
  var includeSpecialChars = confirm("Do you want your password to include special characters?");

  return "Password will generate and display here once all required criteria is selected"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
