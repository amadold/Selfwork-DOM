let generate = document.querySelector('.generate');
let reset = document.querySelector('.reset');
let card = document.querySelector('.cardGroup');

const articles = [
    { id: 1, title: "Articolo 1", description: "Descrizione breve dell'articolo 1." },
    { id: 2, title: "Articolo 2", description: "Descrizione breve dell'articolo 2." },
    { id: 3, title: "Articolo 3", description: "Descrizione breve dell'articolo 3." },
    { id: 4, title: "Articolo 4", description: "Descrizione breve dell'articolo 4." },
    { id: 5, title: "Articolo 5", description: "Descrizione breve dell'articolo 5." },
    { id: 6, title: "Articolo 6", description: "Descrizione breve dell'articolo 6." },
    { id: 7, title: "Articolo 7", description: "Descrizione breve dell'articolo 7." },
    { id: 8, title: "Articolo 8", description: "Descrizione breve dell'articolo 8." },
    { id: 9, title: "Articolo 9", description: "Descrizione breve dell'articolo 9." }
];
let currentIndex = 0;
let articlesPerPage = 3;
let generateArticle = generate.addEventListener('click', () => {
    let nextArticles = articles.slice(currentIndex, currentIndex + articlesPerPage);

    if (nextArticles.length > 0) {
        let cards = nextArticles.map(article => `
            <div class="card">
                <div class="card-body" data-id="${article.id}">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description}</p>
                </div>
            </div>    
        `).join('');
        card.innerHTML += cards;
        currentIndex += articlesPerPage;
    }
    if (currentIndex >= articles.length) {
        generate.classList.remove('cardGroupOn');
        generate.classList.add('cardGroupOff');
    }
});


reset.addEventListener('click', () => {
    card.innerHTML = "";
    generate.classList.remove('cardGroupOff');
    generate.classList.add('cardGroupOn');
    currentIndex = 0;
});









// const articles = [
//     { id: 1, title: "Articolo 1", description: "Descrizione breve dell'articolo 1." },
//     { id: 2, title: "Articolo 2", description: "Descrizione breve dell'articolo 2." },
//     { id: 3, title: "Articolo 3", description: "Descrizione breve dell'articolo 3." },
//     { id: 4, title: "Articolo 4", description: "Descrizione breve dell'articolo 4." },
//     { id: 5, title: "Articolo 5", description: "Descrizione breve dell'articolo 5." },
//     { id: 6, title: "Articolo 6", description: "Descrizione breve dell'articolo 6." },
//     { id: 7, title: "Articolo 7", description: "Descrizione breve dell'articolo 7." },
//     { id: 8, title: "Articolo 8", description: "Descrizione breve dell'articolo 8." },
//     { id: 9, title: "Articolo 9", description: "Descrizione breve dell'articolo 9." }
// ];

// Utilizza HTML, Bootstrap e JavaScript (tramite manipolazione del DOM), per realizzare una pagina web che permetta di visualizzare gli articoli sotto forma di card.


// Nel file HTML, dopo aver incluso Bootstrap, realizza:
// - Una sezione che contenga due bottoni. Uno per generare le card, l'altro per resettare le card;
// - Una sezione in cui verranno inserite le card generate dinamicamente.


// Nel file JavaScript:
// Utilizza la base dati articles.
// Crea un meccanismo che permetta di generare 3 card per volta, ogni volta che si clicca sul bottone “Genera Card”.

// Inoltre, quando tutti gli articoli sono stati mostrati:
// il bottone “Genera Card” deve scomparire;
// deve comparire un alert con la scritta “Articoli Finiti”.

// Infine, tramite il bottone “Reset”:
// elimina tutte le card;
// nascondere l’alert;
// fai riapparire il bottone “Genera Card”;
// riporta tutto allo stato iniziale.

// Suggerimento:
// Per visualizzare 3 articoli alla volta, puoi utilizzare il metodo slice() sull’array.

// Esempio di logica consigliata:

// let currentIndex = 0;
// let articlesPerPage = 3;
// let nextArticles = articles.slice(currentIndex, currentIndex + articlesPerRow);

// Se non riesci in autonomia, segui il video-selfwork.