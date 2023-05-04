// Assignment Code
var generateBtn = document.querySelector("#generate");

// Defines generatePassword function
function generatePassword(length, numbers, uppercase, lowercase, symbols, noDuplicates) {



  return "Unique password placeholder";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
