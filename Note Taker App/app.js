const note = document.querySelector(".note");
const addButton = document.getElementById("addButton");
const notePage = document.getElementById("notePage");
const section = document.querySelector(".section");
const allNotes = document.querySelector('.section').getElementsByTagName('div');

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
    for (let index = 0; index <= allNotes.length; ++index) {
        newHeading.innerText = `Note ${index+1}`
        }
    }   

    notePage.value = "";

    newButton.addEventListener('click', viewDetail);
      
    function viewDetail() {
        const show = document.querySelector('.detail');
        const innerText = document.getElementById("detailText")
        show.style.display = "block";
        innerText.append(newNoteText.innerText);
    }

    const closeBtn = document.getElementById("backButton");

    closeBtn.addEventListener("click", () => {
        const show = document.querySelector('.detail');
        show.style.display = "none";
    })

    const deleteButton = document.createElement("button");
    newNote.append(deleteButton);
    deleteButton.innerText = "DELETE";
    
    deleteButton.addEventListener('click', () => {
        newNote.remove();
    })
})
