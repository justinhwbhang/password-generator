// Assignment code here

function generatePassword() {
    const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz".split('');
    const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    const numSet = "0123456789".split('');
    const specialSet = "!@#$%^&*()+?/:;[]{}<>=_`|~".split('');
    let selectedArray = [];
  
    const passwordLength = getPasswordLength();
    const lowerCase = getChoice("lowercase");
    const upperCase = getChoice("uppercase");
    const numericCharacters = getChoice("numeric");
    const specialCharacters = getChoice("special");
  
    if (lowerCase) {
      selectedArray = [...selectedArray, ...lowerCaseSet];
    }
    if (upperCase) {
      selectedArray = [...selectedArray, ...upperCaseSet];
    }
    if (numericCharacters) {
      selectedArray = [...selectedArray, ...numSet];
    }
    if (specialCharacters) {
      selectedArray = [...selectedArray, ...specialSet];
    }
  
    let passwordString = "";
    for (let i = 0; i < passwordLength; i++) {
      passwordString += selectedArray[Math.floor(Math.random() * (selectedArray.length))];
    }
  
    return passwordString;
  }
  
  function getPasswordLength() {
    let userChoice = 0;
    while ((userChoice < 8) || (userChoice > 128)) {
      userChoice = parseInt(window.prompt("Enter the number of characters between 8 and 128: "));
      if (isNaN(userChoice)) {
        userChoice = 0;
      }
    }
    return userChoice;
  }
  
  function getChoice(currentOption) {
    let userChoice = "a";
    let messagePrompt = `Would you like ${currentOption} characters (y/n)?`;
    while (userChoice === "a") {
      userChoice = window.prompt(messagePrompt).toLowerCase();
      if (userChoice === "y") {
        return true;
      } else if (userChoice === "n") {
        return false;
      }
    }
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  