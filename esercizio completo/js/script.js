// INIZIALIZZAZIONE
const arrayNomeImmagini = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];

const slider = document.querySelector(".slider");

// LOGICA
// Ciclo for che crea le varie immagini
for(let i=0;i<arrayNomeImmagini.length;i++){
    const Immagine = ` <img class="elemento-immagine" src="${arrayNomeImmagini[i]}" alt="img1"> `;
    slider.innerHTML += Immagine;
}
// Inizializzo array di tutti i tag image
const arrayImmagini = document.getElementsByClassName("elemento-immagine");
console.log(arrayImmagini);
// Inizializzo la prima immagine
let indiceAttuale=0;
arrayImmagini[indiceAttuale].classList.add("active");

// Gestione bottoni
const bottonePrecedente=document.querySelector(".precedente");
const bottoneSuccessivo=document.querySelector(".successiva");
// Bottone Successivo premuto
bottonePrecedente.classList.add("display-none");
bottoneSuccessivo.addEventListener("click", function(){
    arrayImmagini[indiceAttuale].classList.remove("active");
    ++indiceAttuale;
    arrayImmagini[indiceAttuale].classList.add("active");

    // Controllo bottoni
    bottonePrecedente.classList.remove("display-none");
    if(indiceAttuale === (arrayImmagini.length - 1)){
        bottoneSuccessivo.classList.add("display-none");
     }
});

 //Bottone precedente premuto
 bottonePrecedente.addEventListener("click", function(){
    arrayImmagini[indiceAttuale].classList.remove("active");
    --indiceAttuale;
    arrayImmagini[indiceAttuale].classList.add("active");

    // Controllo bottoni
    bottoneSuccessivo.classList.remove("display-none");
    if(indiceAttuale === 0){
        bottonePrecedente.classList.add("display-none");
     }
 });

