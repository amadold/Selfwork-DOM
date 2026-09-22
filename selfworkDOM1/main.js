let btn1 = document.querySelector('.color');
let btn2 = document.querySelector('.bold');
let btn3 = document.querySelector('.toggle');
let paragraphs = document.querySelectorAll('.p');
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');

btn1.addEventListener('click', () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let randomColor1 = `rgb(${r}, ${g}, ${b})`;
    let randomColor2 = `rgb(${g}, ${b}, ${r})`;
    let randomColor3 = `rgb(${b}, ${r}, ${g})`;

    p1.style.color = randomColor1;
    p2.style.color = randomColor2;
    p3.style.color = randomColor3;
});

// btn2.addEventListener('click', () => {
//     paragraphs.forEach(p => {
//         p.style.fontWeight = 'bold';
//     });
// });

btn2.addEventListener('click', () => {
    // p1.classList.toggle('bold');
    // p2.classList.toggle('bold');
    // p3.classList.toggle('bold');
    paragraphs.forEach(p => {
        p.classList.toggle('bold');
    })
})

btn3.addEventListener('click', () => {
    paragraphs.forEach(p => {
        p.classList.toggle('pToggle');
    })
})