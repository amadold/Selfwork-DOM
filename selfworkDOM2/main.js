let title = document.querySelector('#title');
let text = document.querySelector('#textarea');
let btnSub = document.querySelector('.submit');
let btnRes = document.querySelector('.reset');
let container = document.querySelector('.container');

btnSub.addEventListener('click', () => {
    if (title.value === "" || text.value === "") {
        alert("Both required");
        if (text.value === "") {
            text.classList.add('textareaError');
        }
        if (title.value === "") {
            title.classList.add('inputError');
        }
    } else {
        container.innerHTML = `
        <h1>${title.value}</h1>
        <p>${text.value}</p>
        `;
        title.value = "";
        text.value = "";
        text.classList.remove('textareaError');
        title.classList.remove('inputError');
    }
});

btnRes.addEventListener('click', () => {
    title.value = "";
    text.value = "";
    text.classList.remove('textareaError');
    title.classList.remove('inputError');
    container.innerHTML = "";
});