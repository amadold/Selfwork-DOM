let textInput = document.querySelector('#textInput');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let btn3 = document.querySelector('.btn3');
let content = document.querySelector('.content');

btn1.addEventListener('click', () => {
    let interval = setInterval(() => {
        if (textInput.value >= 0) {
            content.innerHTML = `<p>${textInput.value}</p>`;
            textInput.value--;
            textInput.classList.add('counterOff');
        } else {
            clearInterval(interval);
            textInput.classList.remove('counterOff');
            textInput.value = "";
            textInput.classList.add('counterOn');
        }
    }, 1000);
    btn2.addEventListener('click', () => {
        clearInterval(interval);
    });
});

btn3.addEventListener('click', () => {
    textInput.classList.remove('counterOff');
    textInput.classList.add('counterOn');
    textInput.value = "";
    content.innerHTML = ``;
})