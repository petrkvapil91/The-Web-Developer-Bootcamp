const toDoList = document.querySelector('.toDoList');
const addButton = document.getElementById('addItem');
const input = document.querySelector('#itemInput');
const itemList = document.getElementById('list');


addButton.addEventListener('click', () => {
    const newItem = document.createElement('li');
    const item = input.value;
        newItem.append(item);
        itemList.appendChild(newItem);
        input.value = "";
    
    const deleteBtn = document.createElement('button');
        newItem.append(deleteBtn);

        deleteBtn.innerText = 'X'
        deleteBtn.style.border = 'none'

    deleteBtn.addEventListener('click', () => {
        newItem.remove();
    })

    const doneBtn = document.createElement('button');
        newItem.append(doneBtn);

        doneBtn.innerText = 'Done'
        doneBtn.style.border = 'none'

    doneBtn.addEventListener('click', () => {
        newItem.style.textDecoration = "line-through"
    })
})

const clearButton = document.getElementById('deleteBtn');

clearButton.addEventListener('click', () => {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
})

