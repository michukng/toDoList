document.addEventListener('readystatechange', (myEvent) => {
    if (myEvent.target.readyState === 'complete') {
        initApp();
    };
});

const initApp = () => {
    const submitKey = document.getElementById('submit');
    submitKey.addEventListener('click', () => { 
        addingByClick()
    });
    input.addEventListener('keypress', (event) => {
        if (input.value.length > 0 && event.key === "Enter") {
            document.getElementById('submit').click();
        }
    });
};

const ul = document.querySelector('ul');
const input = document.getElementById('userInput');

const addingByClick = () => {
    if (input.value.length > 0) {
        elementList();
    };
};

const elementList = () => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.appendChild(document.createTextNode('X'));
    li.appendChild(deleteButton);
    deleteButton.addEventListener('click', () => {
        li.remove();
    });
};