// let random = Math.random();
// if (random < 0.5) {
//     console.log ("your number is less than 0.5!!")
//     console.log(random)
// } 

// const dayOfWeek = prompt("pick a day cunt").toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("uhh i hate mondays")
// } 
//  else if (dayOfWeek === 'sunday') {
//     console.log(" love sundays")
// } else {
//     console.log("Seriously?:/")
// }


// const age = 8;

// if (age <== 5) {
//     console.log("FREE")
// } else if (age < 10) {
//     console.log("CHILD $10")
// } else if (age < 65) {
//     console.log("ADULT $20")
// } else if (age > 65) {
//     console.log("SENIOR $10")
// }

// // password must be 6+ characters

// const password = prompt ("please enter a new password");
// if (password.length >= 6) {
//     console.log ("password long enough")
// } else {
//     console.log ("password too short must be 6+ chars")
// }

// // password cannot include space
// if (password.indexOf ('') === -1) {
//     console.log ("good job no space cunt")
// } else {
//     console.log ("password cannot contain spaces")
// }

// // Change the value of num, so that "YOU GOT ME!" prints out
// const num = 0; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :) 

// // DO NOT TOUCH ANYTHING BELOW (please) 
// if(num <= 100) {
//     if(num >= 50) {
//         console.log("HEY!");
//     }
// } else {
//     if (num < 103) {
//         if(num % 2 === 0){
//             console.log("YOU GOT ME!");
//         }
//     }
// }

const password = prompt ("Enter your password cunt")

if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Valid password!")
} else {
    console.log("Incorrect password mate!")
}