// https://dev.to/code_mystery/random-password-generator-using-javascript-6a

// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"];

// let leftPassEl = document.getElementById("password-left")
// let rightPassEl = document.getElementById("password-right")
// let getPasswordButton = document.getElementById("btn-green")

// getPasswordButton.addEventListener("click", function() {
//     let leftPass = Math.floor( Math.random() * characters.length )
//     let rightPass = Math.floor( Math.random() * characters.length )
//     leftPassEl.textContent = characters[leftPass]
//     rightPassEl.textContent = characters[rightPass]
// })

// Set the variable for the input IDs
var passwordLeft = document.getElementById("password-left");
var passwordRight = document.getElementById("password-right");

// Adding all the symbols, letters and numbers to create random passwords
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordLength = 12;
var passwordLeft = "";
var passwordRight = "";

// Create a random password using a for loop
function genPasswords() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
 for (var i = 0; i <= passwordLength; i++) {
   var randomNumber = Math.floor(Math.random() * chars.length);
   password += chars.substring(randomNumber, randomNumber +1);
  }
        document.getElementById("password-left").value = password;
        document.getElementById("password-right").value = password;
 }

