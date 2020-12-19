const note = document.querySelector(".note");
const addButton = document.getElementById("addButton");
const notePage = document.getElementById("notePage");
const section = document.querySelector(".section");

addButton.addEventListener('click', () => {
    const noteText = notePage.value;
    const newNote = document.createElement("div");
    newNote.classList.add('notes');
    const newHeading = document.createElement("h4");
    const newButton = document.createElement("button");
    const newNoteText = document.createElement('span');

    newNoteText.append(noteText);

    newNote.appendChild(newHeading);
    newNote.appendChild(newNoteText);
    newNote.appendChild(newButton);
    buttonStyle();
    headingStyle();

    section.append(newNote);

    function buttonStyle() {
        newButton.innerText = "View Detail";
    }
    function headingStyle() {
        newHeading.innerText = "Note"
    }
    notePage.value = "";

    newButton.addEventListener('click', () => {
        const newWindow = document.createElement("div");
        const closeButton = document.createElement("button");
        closeButton.innerText = "X"
        const body = document.querySelector('.body')
        newWindow.classList.add("newWindow");
        newWindow.append(closeButton);
        newWindow.append(noteText);
        body.appendChild(newWindow);
    })
})
