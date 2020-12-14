// const addNewJoke = async () => {
//     const jokeText = await getDadJoke();
//     console.log(jokeText)
// }

const jokes = document.querySelector('#jokes');
const button = document.querySelector('#addJoke');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLi = document.createElement('Li');
    newLi.append(jokeText);
    jokes.append(newLi)
}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke  
    } catch (e) {
        return 'NO JOKES AVALIABLE! SORRY'
    }
    
}
button.addEventListener('click', addNewJoke());

