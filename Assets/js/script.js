// minimum character length
var charLength = 8;
// Choice Array
var chArr = [];
// Special Character
var specCharArr = ['$','%','&','^','*','@','!','~'];
// Numbers
var numArr = ['0','1','2','3','4','5','6','7','8','9'];
// Lower Case Alpha
var lowArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// Upper Case Alpha
var upArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// To include prompts to include/exclude various upper/lower case letters, numbers, or special characters
function generatePassword() {

}

// Prompt to choose password characters from 8 - 128
function getPrompts() {

  // Choice Array
var chArr = [];

  charLength = parseInt(prompt("Choose a password length between 8 to 128 characters and click 'Ok'."));
  // Safe net to ensure user follows direction to choose a pw length between 8 - 128
  if(isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("Nope, try reading the directions before answering this time.");
    return false;
  }

  // Prompts if user would like to use Lowercase Letters
  if(confirm("If you'd like Lowercase Letters in your password, click 'OK' to accept, or 'Cancel' to deny.")) {
    chArr = chArr.concat(lowArr);
  }
  // Prompts if user would like to use Uppercase Letters
  if(confirm("If you'd like Uppercase Letters in your password, click 'OK' to accept, or 'Cancel' to deny.")) {
    chArr = chArr.concat(upArr);
  }
  // Prompts if user would like to use Special Characters
  if(confirm("If you'd like Special Characters in your password, click 'OK' to accept, or 'Cancel' to deny.")) {
    chArr = chArr.concat(specCharArr);
  }
  // Prompts if user would like to use numbers
  if(confirm("If you'd like Numbers in your password, click 'OK' to accept, or 'Cancel' to deny.")) {
    chArr = chArr.concat(numArr);
  }

  return true;

}