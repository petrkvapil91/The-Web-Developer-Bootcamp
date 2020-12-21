let input = prompt ('Hey, what do you want me to do?')
const myList = ['picka','hovnik']


while (input !== 'quit') {
    if (input === 'list') {
        console.log('***************')
        for (let i  = 0; i < myList.length; i++) {
        console.log(`#${i}: ${myList[i]}`)
        }
        console.log('***************')
    
    } else if (input === 'new') {
        input = prompt ('Enter a new todo');
        myList.push(input)
        console.log(`${input} added to your list`)
    } else if (input === 'delete') {
        const index = parseInt (prompt ('Enter a number to delete'));
        if (!Number.isNaN(index)) {
            const deleted = myList.splice(index,1)
            console.log(`Ok, ${deleted[0]} deleted!`);
        }
    }

    input = prompt ('Hey, what do you want me to do?')
}

console.log ('Ok, byeee cunt!')