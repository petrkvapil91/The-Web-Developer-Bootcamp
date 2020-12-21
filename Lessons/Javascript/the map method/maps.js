// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]


// const doubles = numbers.map(function (num) {
//     return num * 2;
// })


// const movies = [
//     {
//         title: 'Halo',
//         rating: 80
//     },
//     {
//         title: 'Black Panther',
//         rating: 90
//     },
//     {
//         title: 'Avengers',
//         rating: 99
//     },
//     {
//         title: 'Infinity War',
//         rating: 120
//     },
//     {
//         title: 'End Game',
//         rating: 95
//     }
// ]


// const title = movies.map(function (movie){
//     return movie.title.toUpperCase();
// })


// cleanNames = ["  timothee", "   dark_hater","  sassyfrassy   ",  "  elton john    "];


// function cleanNames(arrStrings) {
//     return arrStrings.map(function (string) {
//         return string.trim()
//     })
// }

//  or////////////////////

// function cleanNames(arrStrings) {
//     const spaces = arrStrings.map(function (string) {
//         return string.trim()
//     })
//     return spaces;
// }


const movies = [
    {
        title: 'Halo',
        rating: 80
    },
    {
        title: 'Black Panther',
        rating: 90
    },
    {
        title: 'Avengers',
        rating: 99
    },
    {
        title: 'Infinity War',
        rating: 120
    },
    {
        title: 'End Game',
        rating: 95
    }
]

// const movieRatings = movies.map(function(movie){
//         return (`${movie.title} - ${movie.rating / 10}`)
//  })

// const newMovies = movies.map movie => (
//     `${movie.title} - ${movie.rating / 10}`
//     )


//     function validUserNames(arrStr) {
//         return arrStr.filter( name => {
//             name.leghth > 10;
//         })
//      }

//     function validUserNames(arr) {
//         return arr.filter(name => name.length < 10);
//     }

//     function validUserNames(arr) {
//         return arr.filter(function(name) {
//             name.lenght < 10;
//         })
//     }

// // validUserNames('mark','staceysmom1978','q29832128238983')

// function allEvens(arrNum){
//     return arrNum.every(even => even % 2;)
// }

