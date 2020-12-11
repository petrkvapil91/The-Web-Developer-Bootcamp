const note = document.querySelector(".note");
const addButton = document.getElementById("addButton");
const notePage = document.getElementById("notePage");
const section = document.querySelector(".section");

addButton.addEventListener('click', () => {
    const noteText = notePage.value;
    const newNote = document.createElement("div");
    const newHeading = document.createElement("h4");
    const newButton = document.createElement("button");

    newNote.append(newHeading);
    newNote.append(noteText);
    newNote.append(newButton);
    buttonStyle ();
    headingStyle ();

    section.append(newNote);

    function buttonStyle () {
        newButton.innerText = "View Detail";
    }

    function headingStyle () {
        newHeading.innerText = "Note"
    }

    notePage.value = "";
})
