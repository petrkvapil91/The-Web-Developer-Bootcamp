const toDoList = document.querySelector('.toDoList');
const addButton = document.getElementById('addItem');
const input = document.querySelector('#itemInput');
const itemList = document.getElementById('list');

addButton.addEventListener('click', () => {
    const item = input.value;
    const newItem = document.createElement('li');
    newItem.append(item);   
    itemList.appendChild(newItem);
    input.value = "";
})

const clearButton = document.getElementById('deleteBtn');

    clearButton.addEventListener('click', () => {
            itemList.removeChild();
    })

