// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// add event listener to Generate Password button
generateBtn.addEventListener("click", writePassword);


// Create function 'generatePassword();' to run when button clicked
function generatePassword() {   

  
  // Arrays for available characters //
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "'", "/", "?", ",", ".", "`", "~"];

  
  const length = prompt("Choose a Password Length between 8 and 128 characters");
  parseInt(length); //converts length to a number
  console.log("Length: " + length);
  if (length < 8 || length > 128) {   
    alert("Select a number between 8 through 128");  
    return "Select a number between 8 through 128";   
  } 
  else {  
  
    let characterType = [];  

//Lowercase
    const charLowercase = confirm("Would you like lowercase letters in your password? If yes select OK, if no select cancel");     
    if(charLowercase) {
      characterType.push("lowerLetter");
    }

//Uppercase
    const charUppercase = confirm("Would you like uppercase letters in your password? If yes select OK, if no select cancel");
    if(charUppercase) {
      characterType.push("upperLetter");
    }

//numbers
    const charNumber = confirm("Would you like Numbers in your password? If yes select OK, if no select cancel");
    if(charNumber) {
      characterType.push("numberCharacter");
    }

//Special Characters
    const charSpecial = confirm("Would you like Special characters in your password? If yes select OK, if no select cancel");
    if(charSpecial) {
      characterType.push("specialCharacter");
    }

//Nothing selected
    if(charLowercase !== true && charUppercase !== true && charNumber !==true && charSpecial !== true) {
      alert("Select at least one character type");
      return "Select at least one character type";
    }

//Functions 
    function generateLower() {
      let lowerRandom = letters[Math.floor(Math.random() * letters.length)]; //converts to string
      return lowerRandom;
    }

    function generateUpper() {
      let upperRandom = letters[Math.floor(Math.random() * letters.length)].toUpperCase(); //adds uppercase
      return upperRandom;
    }

    function generateNumber() {
      let numberRandom = Math.floor(Math.random() * 10); // string so 10 is 0-9
      return numberRandom;
    }

    function generateSpecial() {
      let specialRandom = specialChar[Math.floor(Math.random() * specialChar.length)];
      return specialRandom;
    }

//! Password Creation time!
    let passwordArray = [0];
    for(var i = 0; i < length; i++) { //loop until length is met
      let typeArray = Math.floor(Math.random() * characterType.length);
      if(characterType[typeArray] == "lowerLetter") {
        passwordArray[i] = generateLower(); //generates lowercase character
      }  
      else if (characterType[typeArray] == "upperLetter") {
        passwordArray[i] = generateUpper(); //generates uppercase character
      } 
      else if (characterType[typeArray] == "numberCharacter") {
        passwordArray[i] = generateNumber(); //generates Number character
      } 
      else if (characterType[typeArray] == "specialCharacter") {
        passwordArray[i] = generateSpecial(); //generates Special character
      } 
      else {
        console.log("No match.")
      }
    }

    //join character types
    let generatedPassword = passwordArray.join("");
    return generatedPassword;      
    }
} //end of function