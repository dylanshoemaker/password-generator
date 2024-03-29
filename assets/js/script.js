//put var numbers letters and symbols here
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["0123456789"];
var symbols = ["!#$%&()*+-:;<=>?@[\]^_`{|}~"];

// Get references to the #generate element in html with id = generate
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", displayPassword);

//start password generator by user pressing button
function passwordMachineGoBrrr() {
  //prompt What length would you like your new password to be? You can pick any length between 8 and 128 characters!
  var userInputLength = parseInt(prompt("What length would you like your new password to be? You can pick any length between 8 and 128 characters!"));
  //this is for no response
  if (!userInputLength) {
    alert("Have you ever seen a blank password before? Neither have we. Please try again.");
    return "";
    //response is not between 8-128 characters 
  } else if (userInputLength < 8 || userInputLength > 128) {
    userInputLength = alert("You absolutely must enter a number between 8 and 128, I insist!");
    return "";
  } else {
    var confirmLowerCase = confirm("Would you like lower case letters? e.g. abcde");
    var confirmUpperCase = confirm("Would you like UPPER CASE letters? e.g. ABCDE");
    var confirmNumbers = confirm("Would you like Numbers? e.g. 1337");
    var confirmSymbols = confirm("Would you like special characters? e.g. $#!@");
  }  
  // if all options are false then send user alert
  if (!confirmUpperCase && !confirmLowerCase && !confirmNumbers && !confirmSymbols) {
    alert("Invalid response, password must have at least one type of character, please choose at least one option.");
    return "";
  }

  //use concatenation.....example from w3: string.concat(string1, string2, ..., stringX)  
  //if you make the string "" ( not null ) then you can use this to simply get all the values...
  //...of the 4 categories and then you just run a 4 loop to put it all together in the return at the bottom of the entire function
  //... because the password this function generated is a result of the function passwordMachineGoBrrr
  var charCodes = "";
 
  if (confirmUpperCase) {
    charCodes = charCodes.concat(upperCase);
  }
  if (confirmLowerCase) {
    charCodes = charCodes.concat(lowerCase);
  }
  if (confirmNumbers) {
    charCodes = charCodes.concat(numbers);
  }
  if (confirmSymbols) {
    charCodes = charCodes.concat(symbols);
  }
  
  // this is the coding version of a junk drawer where a bunch of random things will find its home
  var finalProduct = [];

  // this is where everything is actually compiled
  for (var i = 0; i < userInputLength; i++) {
    finalProduct = finalProduct + charCodes[Math.floor(Math.random() * charCodes.length)];
  }

  return finalProduct; 
};

// links to html
function displayPassword () {
      var password = passwordMachineGoBrrr();
      var passwordText = document.getElementById("password");
      passwordText.value = password;
};