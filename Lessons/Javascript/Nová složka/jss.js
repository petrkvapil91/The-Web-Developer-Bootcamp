// const button = document.querySelector('button');
// const heading = document.querySelector('h1');

// button.addEventListener('click', () => {
//     const newColor = makeRandColor()
//     document.body.style.backgroundColor = newColor;
//     heading.innerText = newColor;
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() *255);
//     const g = Math.floor(Math.random() *255);
//     const b = Math.floor(Math.random() *255);
//     const sum = r + g + b
//     if (sum < 200) {
//         heading.style.color = "white";
//         return  `rgb(${r}, ${g}, ${b})`;
//     } else {heading.style.color = "black";
//     return `rgb(${r}, ${g}, ${b})`;
// }
// } 

// document.querySelector('button').addEventListener('click', (evt) => {
//     console.log('evt');
// })

const tweetForm = document.querySelector('#tweetForm')
const tweetsContainer = document.querySelector('#tweets')
tweetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // const usernameInput = document.querySelectorAll('input')[0];
    // const tweetInput = document.querySelectorAll('input')[1];
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(` - ${tweet}`)
    tweetsContainer.append(newTweet); 
}