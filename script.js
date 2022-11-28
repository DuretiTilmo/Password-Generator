// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variable declaration
var confirmLength = "";
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

// Prompt the password length and character types the user would like to include
function generatePassword(){
var confirmLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
while(confirmLength <= 8 || confirmLength >= 128) {
    alert("Password length must be between 8-128 characters. Try again");
    var confirmLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
    } 

    alert(`Your password will have ${confirmLength} characters`);
        specialCharConfirm = confirm("Click OK to confirm if you like to include special characters"),
        numbersConfirm= confirm("Click OK to confirm if you like to include numeric characters"),  
        lowerCaseConfirm = confirm("Click OK to confirm if you like to include lowercase characters"),
        upperCaseConfirm = confirm("Click OK to confirm if you like to include uppercase characters")

// Repeat Loop if answer is outside the parameters
while(specialCharConfirm === false && numbersConfirm === false && lowerCaseConfirm === false && upperCaseConfirm === false){
 alert("You must choose at least one character type");
 var specialCharConfirm = confirm("Click OK to confirm if you like to include special characters");
 var numbersConfirm = confirm("Click OK to confirm if you like to include numeric characters");    
 var lowerCaseConfirm = confirm("Click OK to confirm if you like to include lowercase characters");
 var upperCaseConfirm = confirm("Click OK to confirm if you like to include uppercase characters");
}
let password = ""; 

for(let i = 0; i < confirmLength; i++){
    if(specialCharConfirm && password.length < confirmLength){
        const randomindex = Math.floor(Math.random() * specialChar.length);
        password += specialChar[randomindex]
    }
    if(numbersConfirm && password.length < confirmLength){
        const randomindex = Math.floor(Math.random() * numbers.length);
        password += numbers[randomindex]
    }
    if(lowerCaseConfirm && password.length < confirmLength){
        const randomindex = Math.floor(Math.random() * lowerCase.length);
        password += lowerCase[randomindex]
    }
    if(upperCaseConfirm && password.length < confirmLength){
        const randomindex = Math.floor(Math.random() * upperCase.length);
        password += upperCase[randomindex]
    }
}
return(password);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
