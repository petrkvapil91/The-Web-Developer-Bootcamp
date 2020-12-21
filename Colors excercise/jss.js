const button = document.querySelector('button');
const heading = document.querySelector('h1');

button.addEventListener('click', () => {
    const newColor = makeRandColor()
    document.body.style.backgroundColor = newColor;
    heading.innerText = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() *255);
    const g = Math.floor(Math.random() *255);
    const b = Math.floor(Math.random() *255);
    const sum = r + g + b
    if (sum < 200) {
        heading.style.color = "white";
        return  `rgb(${r}, ${g}, ${b})`;
    } else {heading.style.color = "black";
    return `rgb(${r}, ${g}, ${b})`;
}
} 