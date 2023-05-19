// move links animation

const wrapper = document.querySelector('.wrapper');

window.addEventListener('mousemove', () => {
    wrapper.classList.add('active');
})

// ToDoList

const input = document.querySelector('.todolist__text');
const btn = document.querySelector('.todolist');
const list = document.querySelector('.todolist__list');

const addList = (e) => {
    e.preventDefault();
    const listItem = document.createElement('li');
    list.appendChild(listItem)
    listItem.classList.add('listStyle')
    listItem.textContent = input.value;
    input.value = '';

    listItem.addEventListener('click', () => {
        listItem.style.color = 'red';
        listItem.style.textDecoration = 'line-through';
    })

    listItem.addEventListener('dblclick', () => {
        listItem.style.textDecoration = 'none';
        listItem.style.color = 'white';
    })
}

btn.addEventListener('submit', addList);