let order = prompt ('What would you like to do?');
const myList = ['nothing'];
while (order !== 'quit' && order !== 'q') {
    if (order === 'list') {
         console.log('*******************')
         for (let i=0;i<myList.length; i++) {
             console.log(`${i}: ${myList[i]}`);
         } 
         console.log('*******************')
    } else if (order === 'new') {
        const newTodo = prompt ('Ok, what is the new todo?');
        myList.push(newTodo);
        console.log(`${newTodo} added to the list! `)
    } else if(order === 'delete') {
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if (!Number.isNaN(index)) {  
            const deleted = myList.splice(index, 1);
            console.log(`Ok, ${deleted[0]} was deleted!`);
        }
    }
    order = prompt ('What would you like to do?')
}
console.log('Ok, you quit the app')
