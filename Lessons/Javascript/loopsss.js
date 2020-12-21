// 100
// 90
// 80
// ...


// for (let i=100; i>=0; i-= 10) {
//     console.log(i);
// }

// const seatingChart = [
//         ['boby', 'erik', 'nevim'],
//         ['paul', 'kevin', 'sara', 'antonio'],
//         ['pete', 'sona', 'sarah', 'alejandro']
// ]

// for (let i = 1; i<=10; i++) {
//     console.log(`i is: ${i}`)
//     for (let j = 1; j<4; j++) {
//         console.log(`   j is: ${j}`)
//     }
// }

// const seatingChart = [
//         ['boby', 'erik', 'nevim'],
//         ['paul', 'kevin', 'sara', 'antonio'],
//         ['pete', 'sona', 'sarah', 'alejandro']
// ]

// for (let i = 0; i < seatingChart.length; i++) {
//     const row = seatingChart[i];
//         console.log(`ROW # ${i + 1}`)
//     for (let j = 0; j < row.length; j++) {
//         console.log(row[j])
//     }   
// }

// let count = 0;
// while(count < 10) {
//     count++;
//     console.log(count)
// }

// const secret = "BabyHippo";

// let guess = prompt("Enter the secret code")
// while(guess !== secret) {
//     guess = prompt("Enter the secret code")
// }
// console.log("Congrats")

// let input = prompt("hey say something nigga!")
// while (true) {
//     input = prompt(input);
//     if(input.toLowerCase() === "stop copying me cunt") break;
// }
// console.log("ok you win")


// ------------------------------------------

// let maximum = parseInt(prompt("Enter your max number man"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter your max number man"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1; { 
// }

// let guess = parseInt(prompt("Enter your first guess!"));
// let attempts = 1;

// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempts++;
//     if(guess > targetNum) {
//         guess = prompt("Too high man");
//     } else {
//         guess = prompt("Too low");
//     }
// }

// if (guess === "q") {
//     console.log ('Pussy quitter get fucked');
// } else {
//     console.log('Guud guud cunt!');
//     console.log(`You made it bitch .... took you ${attempts} guesses`)
// }
//  ================----------------------------------

// const subreddits = ['zmrd','hovnik','pussy','necoooo', 'mam v pici'] 

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(`Visit reddit.com/r/${subreddits[i]}`)
// }

// for (let subs of subreddits) {
//     console.log(`Visit reddit.com/r/${subs}`)
// }

// ========================================================

// const seatingChart = [
//         ['boby', 'erik', 'nevim'],
//         ['paul', 'kevin', 'sara', 'antonio'],
//         ['pete', 'sona', 'sarah', 'alejandro']
// ]

// // for (let i = 0; i < seatingChart.length; i++) {
// //     const row = seatingChart[i];
// //         console.log(`ROW # ${i + 1}`)
// //     for (let j = 0; j < row.length; j++) {
// //         console.log(row[j])
// //     }   
// // }

// for (let row of seatingChart) {
//     for (let student of row) {
//         console.log(student);
//     }
// // }

// for (let char of "hello worlddd") {
//     console.log(char)
// }

// const testScore = {
//     ksdasda: 82,
//     kenna: 895,
//     kedsadwna: 25,
//     keqwea: 95,
//     terterenna: 75,
// }

// // for (let person in testScore) {
// //     console.log(`${person} scored ${testScore[person]}`);
// // }

// let total = 0;
// let scores = Object.value(testScore)
// for (score of scores) {
//     total += score;
// }
// console.log(total / score.length)