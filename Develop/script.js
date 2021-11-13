// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";
// Set variables
var abcUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var abcUppercaseArr = abcUppercase.split("");
var abcLowercase = "abcdefghijklmnopqrstuvwxyz";
var abcLowercaseArr = abcLowercase.split("");
var numeric = "0123456789";
var numericArr = numeric.split("");
var specialChars = "!@#$%^&*()_+,-=+`~[]{}/";
var specialCharsArr = specialChars.split("");
var userCharChoices = [];

// Prompt for user to begin selecting criteria to generate password
window.onload = alert("Welcome! Select 'Generate Password' to generate your random password! :)")

// Verification that Generate Password button works 
function generatePassword() {
// Random generator to return final password in the end
  var result = "";

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
  // Prompt the user for password criteria
  var includeUppercase = confirm("Do you want your password to include uppercase letters?");
  var includeLowercase = confirm("Do you want your password to include lowercase letters?");
  var includeNumeric = confirm("Do you want your password to include numbers?");
  var includeSpecialChars = confirm("Do you want your password to include special characters?");
  // verify that user selected at least 1 of the criteria
  if (includeUppercase || includeLowercase || includeNumeric || includeSpecialChars) {
    // Check which criteria the user selected 
    if (includeUppercase) {
      // add uppercase array to userCharChoices array 
      userCharChoices = userCharChoices.concat(abcUppercaseArr);
    }
    if (includeLowercase) {
      // add lowercase array to userCharChoices array 
      userCharChoices = userCharChoices.concat(abcLowercaseArr);
    }
    if (includeNumeric) {
      // add numeric array to userCharChoices array 
      userCharChoices = userCharChoices.concat(numericArr);
    }
    if (includeSpecialChars) {
      // add specialChars array to userCharChoices array 
      userCharChoices = userCharChoices.concat(specialCharsArr);
    }

    console.log(userCharChoices);
    // Generate password based on that criteria 
    // take length of password user wants
    for (var i = 0; i < length; i++) {
      // randomly select a character that fits the criteria 
      var randomNum = Math.floor(Math.random() * userCharChoices.length);
      // assign number to userCharChoices array
      password += userCharChoices[randomNum];
    }

  }
  else {
    alert("You must select at least one of the password criteria's")
    return "Password will generate and display here once all required criteria is selected"
  }

return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);