const msgVowels = document.querySelector(".message");
const checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener('click', () => {
    function countVowels(str){
        return (str.match(/[aeiou]/gi) == null) ? 0 : str.match(/[aeiou]/gi).length;        
    }
    const message = msgVowels.value
    const result = countVowels(message)
    alert(result);
})


