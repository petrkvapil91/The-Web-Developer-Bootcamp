

// function greet (firstName, lastName) {
//     console.log(`Hey there, ${firstName} ${lastName[0]}.`)
// }

// greet('George', 'Clooney')

// repeat ('hi', 3)

// hihihi

// function repeat(str, numTimes) {
//     let result = '';
//     for (let i =0; i < numTimes; i++){
//         result += str;
//         console.log(result);
//     }
// }

// let input = [1,2,3,4,5,6]
// for (let i=Math.floor(Math.random() * 10) + 1; i<=6; i++)
//         console.log(i)

// function isSnakeEyes (jedna, dva) {
//     if (jedna === dva && dva === 1) {
//         console.log('Snake Eyes!')
//      }else {
//         console.log('Not Snake Eyes!')
//     }
// }

// function lastElement(lastEL) {
//     if (lastEL.length === 0) {
//     return null;
//     } return lastEL[lastEL.length - 1];
// }

// function capitalize(capitL) {
//     return capitL.charAt(0).toUpperCase() + capitL.slice(1);
// }


// function sumArray(arr) {
//     let sum = 0;
//     for (let i=0;i<arr.length; i++) {
//         sum+=arr[i];
//     }
//     return sum;
// }

// function returnDay(num){
//     const days = [null,'Monday',"Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
//     return num > 0 && num <= 7 ?days[num] : null;
// }

// const hen = {
//     name:'Helen', 
//     eggCount: 0, 
//     layAnEgg() {
//         this.eggCount += 1;
//         return "EGG";
//     }
// }

// const cat = {
//     name: ' blue steele',
//     color: 'grey',
//     breed: 'scottish fold',
//     meow(){
//         console.log("meow meow meow")
//     }
// }\

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// numbers.forEach(function (el) {
//     if (el % 2 === 0) {
//         console.log(el)
//     }
// });

// for (let el of numbers) {
//     if (el % 2 ===0) {
//     console.log(el)    
//     }   
// }

// const ratings = [
//     {movie: 'Halo',
//     rating: 80},
//     {movie: 'Black Panther',
//     rating: 90},
//     {movie: 'Avengers',
//     rating: 99}
// ]

// ratings.forEach(function (index){
//     console.log(`${index.movie} - ${index.rating}/100`)
// })