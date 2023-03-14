// INIZIALIZZAZIONE
const arrayImmagini = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];

const slider = document.querySelector(".slider");

// LOGICA
// Ciclo for che crea le varie immagini
for(let i=0;i<arrayImmagini.length;i++){
    const Immagine = ` <img class="elemento-immagine" src="${arrayImmagini[i]}" alt="img1"> `;
    slider.innerHTML += Immagine;
}