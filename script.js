// Selecting of tags
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const addBtn = document.querySelector('#add-btn');
const mainContainer = document.querySelector('.main');
const clearBtn = document.querySelector('#clear-btn');
const addpopup = document.querySelector('.input-box');
const AddItemBtn = document.querySelector('#AddItem-btn');
const container = document.querySelector('.container');
const inputClose = document.querySelector('#input-close');

// load the old date 
if (localStorage.length > 0) {

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        mainContainer.innerHTML += `
        <div class="box">
        <h1>${key}</h1>
        <br>
        <p>${localStorage.getItem(key)}</p>
        <button id="deleteBtn" onclick="deleteItem(this)">Delete</button>
        <button id="updateBtn" onclick="updateItem(this)">Edit</button>
        </div>`
    }
}


// save and add item
function saveItem() {
    if(title.value == '' && description.value == '') {
        alert("Add title or Description")
    }
    else{
    localStorage.setItem(title.value, description.value);

    mainContainer.innerHTML += `<div class="box">
    <h1>${title.value}</h1>
    <br>
    <p>${description.value}</p>
    <button id="deleteBtn" onclick="deleteItem(this)">Delete</button>
    <button id="updateBtn" onclick="updateItem(this)">Edit</button>
    </div>`
    title.value = '';
    description.value = '';
    addpopup.style.display = 'none'
    container.style.opacity = 1;
    }

}
// Clear all the notes
function clear() {
    if (confirm('You want delete all Notes?')) {
        localStorage.clear();
        mainContainer.innerHTML = '';

    }
}

// this function execute onclick delete btn 
function deleteItem(e) {
    let item = e.parentElement.childNodes[1].innerHTML
    localStorage.removeItem(item)
    e.parentElement.remove();

}

// close the input dialoge box
function inputCloseF() {
    container.style.opacity = 1;
    addpopup.style.display = 'none'
}


// working continue on this function
function updateItem(e){

    title.value = e.parentElement.childNodes[1].innerText;
    description.value = e.parentElement.childNodes[5].innerText;
    localStorage.removeItem(e.parentElement.childNodes[1].innerText);
    e.parentElement.remove();
    container.style.opacity = 0.3;
    addpopup.style.display = 'flex'
    
}

// firing the functions
addBtn.addEventListener('click', saveItem);
clearBtn.addEventListener('click', clear);
AddItemBtn.addEventListener('click', () => {
    container.style.opacity = 0.3;
    addpopup.style.display = 'flex'
}
);

inputClose.addEventListener('click', inputCloseF);


