// move links animation

const wrapper = document.querySelector('.wrapper');

const linksAnimation = () => {
    wrapper.classList.add('active');
}

window.addEventListener('mousemove', linksAnimation);

// ToDoList

const input = document.querySelector('.todolist__text');
const btn = document.querySelector('.todolist');
const list = document.querySelector('.todolist__list');

const placeholder = () => {
    input.value = '';
    input.style.opacity = '1';
}

const addList = (e) => {
    e.preventDefault();
    const listItem = document.createElement('li');
    const trashIcon = document.createElement('i');
    list.appendChild(listItem);
    listItem.className = 'todolist__list-item'
    listItem.innerHTML = `${input.value}`;
    input.value = '';

    const jobdone = () => {
        trashIcon.className = 'todolist__icon fa-solid fa-trash';
        listItem.appendChild(trashIcon);
        listItem.classList.add('selected');
        listItem.style.color = 'greenyellow';
        listItem.style.textDecoration = 'line-through';
        listItem.style.transition = '.5s linear';
    }

    const jobReturn = () => {
        listItem.style.textDecoration = 'none';
        listItem.style.color = 'white';
        listItem.classList.remove('selected');
        listItem.removeChild(trashIcon);
    }

    const jobRemove = () => {
        const confirmed = confirm('Are you sure to remove this list?');
        if (confirmed) {
        list.removeChild(listItem);
        }
    }

    listItem.addEventListener('click', jobdone);
    listItem.addEventListener('dblclick', jobReturn);
    trashIcon.addEventListener('click', jobRemove);
}

input.addEventListener('click', placeholder);
btn.addEventListener('submit', addList);

// Notepad

let note = document.querySelector('.wrapper-notePad__note');
const noteButtons = document.querySelectorAll('.wrapper-notePad__btn');

let Size = 0.3;

function noteActions() {
    if (this.textContent === 'Clear') {
        note.value = '';
    } else if (this.textContent === 'B') {
        note.style.fontWeight = 'bold';
    } else if (this.textContent === 'I') {
        note.style.fontStyle = 'italic';
    } else if (this.textContent === '_') {
        note.style.textDecoration = 'underline';
    } else if (this.textContent === '-') {
        let currentFontSize = parseFloat(getComputedStyle(note).fontSize);
        let newFontSize = currentFontSize - Size;
        note.style.fontSize = newFontSize + 'px';
    } else if (this.textContent === '+') {
        let currentFontSize = parseFloat(getComputedStyle(note).fontSize);
        let newFontSize = currentFontSize + Size;
        note.style.fontSize = newFontSize + 'px';
    }     
}

noteButtons.forEach(button => button.addEventListener('click', noteActions));