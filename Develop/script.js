// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialChar = "!@#$%^&*()<>?{}|_+,./;'[]`-=";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Function that generates a password based on criterias through alerts 
function generatePassword() {

  //Password Length Alert
  var userLength = prompt("How many charecters would you like you password to be? \nMust be between 8 - 128 charecters ");
  if (userLength < 8 || userLength > 128) {
    var lengthIncorrect = alert("Invalid password length request Please choose a length between 8 - 128")
  }

  //Password Length Decider
  if (userLength >= 8 === userLength <= 128) {

    // Lower Case Request Prompt
    var userLow = confirm ("Would you like the password to contain lower case letters?");
    if (userLow) {
      alert (" You have selected you want lower case letters")
    }
    else {
      alert ("You have chosen not to use lower case letters")
    }

    // Upper Case Request Prompt
    var userUpper = confirm ("Would you like the password to contain upper case letters?");
    if (userUpper) {
      alert (" You have selected you want upper case letters")
    }
    else {
      alert ("You have chosen not to use upper case letters")
    }

    // Numbers Request Prompt
    var userNumber = confirm ("Would you like the password to contain numbers?");
    if (userNumber) {
      alert (" You have selected you want numbers")
    }
    else {
      alert ("You have chosen not to use numbers")
    }

    // Special Charecter Request Prompt
    var userSpecial = confirm ("Would you like the password to contain special charecters?");
    if (userSpecial) {
      alert (" You have selected you want special charecters")
    }
    else {
      alert ("You have chosen not to use special charecters")
    }

    if ( userLow === false && userUpper === false && userNumber === false && userSpecial === false) {
      alert ("You need to select at least one character type before a password can be generated")
    }
  }
    
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
