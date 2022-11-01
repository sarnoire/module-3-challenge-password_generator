// Assignment code here
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Added functions to generate alphanumeric & special character selections
function randomint(min, max) {
  return Math.floor(Math.random()*(max - min) + min)
}

function getRandomSelection(list) {
  return list[randomint(0, list.length)]
}

// Add function to generate password in the page via user input
function generatePassword() {

  var userEntry      = window.prompt("Password Length?")
  var passwordLength = parseInt(userEntry)
  var getPassword = ""

    if (isNaN(passwordLength)) {
      window.alert("Value Rejected. Numeric value required.")
    };

    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password must less than 128 characters and greater than 8 characters." )
      return
    } 

//add variables for each prompt - numbers, lower & uppercase letters, & special characters. Then create a way to pull into a password.

  var userQueryNumbers   = window.confirm("Password to include numbers?")
  var userQueryLowercase = window.confirm("Password to include lowercase letters?")
  var userQueryUppercase = window.confirm("Password to include uppercase letters?")
  var userQuerySpecial   = window.confirm("Password to include special characters?")

  var numbers    = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var special    = ["!", "@", "#", "$", "%", "&", "+", "?", "<", ">"]
  var lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  var passwordOptions = []

    if (userQueryNumbers === true) {
      passwordOptions.push(numbers)
    }

    if (userQueryLowercase === true) {
      passwordOptions.push(lowerAlpha)
    }

    if (userQueryUppercase === true) {
      passwordOptions.push(upperAlpha)
    }
  
    if (userQuerySpecial === true) {
      passwordOptions.push(special)
    }

    if (passwordOptions.length === 0) {
      passwordOptions.push(lowerAlpha)
    }

  

    for (i = 0; i < passwordLength; i++) {
      var randomSelection = getRandomSelection(passwordOptions)
      var randomCharacter = getRandomSelection(randomSelection)
      getPassword += randomCharacter
    }
    console.log (passwordOptions)

  return getPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  if (password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } 
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
