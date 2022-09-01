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


var length = Number(prompt("Input password length 8 - 100")),
encryptionChars = prompt("Enter a character type: uppercase, numbers, special,  lowercase."), 
password = generatePassword();
document.getElementById("password").value = password;

function generatePassword() {
  var charSets = {
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    special: ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'
  };
  var charInput = charSets[encryptionChars.toLowerCase()] || charSets.lowercase;
  var randPassword = "";
  for (var i = 0; i < length; i++) {
    randPassword += charInput.charAt(Math.floor(Math.random() * charInput.length));
  }
  return randPassword;
}
