// DOM Elements
var displayPass = document.getElementById('display'); //display final password

var password_lengthEl = prompt("How many characters is your password going to be?");
var password_lowercaseEl = confirm("Do you wnat lowercase characters");
var password_uppercaseEl = confirm("Do you want uppercase charcaters");
var password_symbolEl = confirm("Do you wnat symbol charcaters (@, #, *, etc...)");
var password_numbersEl = confirm("Do you wnat numbers (0-9)");
var generate_password = document.getElementById('generate');


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