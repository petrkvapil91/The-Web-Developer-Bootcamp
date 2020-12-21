// const form = document.querySelector('form');
// const listContainer = document.querySelector('#list')
// form.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     // const productInput = document.querySelectorAll('input')[0];
//     // const qtyInput = document.querySelectorAll('input')[1];
//     const productInput = form.elements.product.value
//     const qtyInput = form.elements.qty.value
//     form.elements.product.value = "";
//     form.elements.qty.value = "";

//     const newProd = document.createElement('li');
//     newProd.append(`${qtyInput} `);
//     newProd.append(productInput);
//     listContainer.append(newProd);
//     });


let inputHere = document.querySelector('input');
let header = document.querySelector('h1');
 
inputHere.addEventListener('input',()=>{
    header.innerHTML = `Welcome, ${inputHere.value}`;
    if(inputHere.value === ''){
        header.innerHTML = "Enter Your Username";
    }
})