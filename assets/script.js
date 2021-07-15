// DOM Elements
var displayPass = document.getElementById('display'); //display final password

var password_lengthEl = prompt("How many characters is your password going to be?");
var password_lowercaseEl = confirm("Do you wnat lowercase characters");
var password_uppercaseEl = confirm("Do you want uppercase charcaters");
var password_symbolEl = confirm("Do you wnat symbol charcaters (@, #, *, etc...)");
var password_numbersEl = confirm("Do you wnat numbers (0-9)");
var generate_password = document.getElementById('generate');

//Check that lenght is less than 7 or 0
while(password_lengthEl < 8 || password_lengthEl > 128){
  password_lengthEl = prompt("Your password must have a minimum of 8 and a maximum of 128 characters");
}

//put all the functions in an object
var randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbols
};

//when button is clicked  
generate_password.addEventListener("click", function() {
  //gets all values
  var length = parseInt(password_lengthEl.valueOf());
  var passLower = password_lowercaseEl;
  var passUpper = password_uppercaseEl;
  var passSymbol = password_symbolEl;
  var passNum = password_numbersEl;

  //displays password into the textbox
  displayPass.innerText = generatePassword(passLower, passUpper , passSymbol, passNum, length);
});

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Generator functions

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols= '.?!@_-=+:;[]}{/><()';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);