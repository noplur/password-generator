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
    
    // confirm if user wants numbers, upper case letters, lower case letters and/or special characters in password
      var hasNumbers = window.confirm("Do you want numbers in this password?");
      var hasUppercase = window.confirm("Do you want upper case letters in this password?");
      var hasLowercase = window.confirm("Do you want lower case letters in this password?");
      var hasSpecialchar = window.confirm("Do you want special characters in this password?");
    
    // if user does not want any numbers, upper case letters, lower case letters or special characters in password
      if (hasNumbers === false && hasUppercase === false && hasLowercase === false && hasSpecialchar === false) {
        window.alert("You need at least 1 number, special character, upper case letter or lower case letter.")
      return;
      }

  // generators choose password randomly from arrays
  var password = ""
  while(password.length < passLength) {
    
    if (hasNumbers === true) {
      password = password + random(numChars)
      if (password.length === passLength) {
        break;
      }
    } 
    if (hasSpecialchar === true) {
        password = password + random(specialChars)
        if (password.length === passLength) {
          break;
        }
      }
      
    if (hasLowercase === true) {
        password = password + random(lowerChars)
        if (password.length === passLength) {
          break;
        }
      }
    if (hasUppercase === true) {
        password = password + random(upperChars)
        if (password.length === passLength) {
          break;
        }
      }
  }
  
// returns user the generated password
  return password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
