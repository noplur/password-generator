// Assignment Code
var generateBtn = document.querySelector("#generate");

    // Variables
var specialChars = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


// Write function to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

    // function to genrate a random character value
function random(arr) {
  var index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

    // function to ask user how many character's to use for password
function generatePassword() {
  var passLength = window.prompt("How many characters do you want your password to be");

  passLength = parseInt(passLength);

  console.log(passLength);


    // alert if number of characters are within acceptable range
  if (isNaN(passLength) === true) {
      window.alert("Password length must be a number.");
      return;
      }
    
    // alert if number of characters are not within acceptable range
  if (passLength < 8 || passLength > 128) {
      window.alert("Password must be between 8 and 128 characters.");
      return;
    }


// returns user the generated password
  return password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
