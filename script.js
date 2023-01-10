// CONSEGNA
// -------------------------
// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come ispirandovi alla foto allegata. Se volete cambiare la grafica siete liberi di farlo.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile assieme al suo titolo e testo.
// Milestone 2:
// Aggiungere il "ciclo infinito" del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
// BONUS 1:
// Aggiungere le thumbnails (sotto forma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop  del meccanismo di autoplay.

console.log('VUE OK', Vue);

const data = [
  {
    image: 'img/01.webp',
    title: 'Marvel\'s Spiderman Miles Morale',
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  }, {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  }, {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  }, {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  }, {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }
];

// Seleziono elementi dal DOM
const containerSlide = document.getElementById('container-slide');
const containerThumb = document.getElementById('container-thumb');

// Inserisco immagini nel Container Slide
let imgSlide = '';

for (i = 0; i < data.length; i ++) {
  
  imgSlide += 
  `
  <div class="slide">
      <img src="${data[i].image}" alt="immagine-${i}">
      <div class="caption">
          <h2>${data[i].title}</h2>  
          <p>${data[i].text}</p>
      </div>
  </div>

  `
}

containerSlide.innerHTML = imgSlide;

// Inserisco immagini nel Container Thumb
let imgThumb = '';

for (i = 0; i < data.length; i ++) {
  
  imgThumb += 
  `
  <div class="thumb">
    <img src="${data[i].image}" alt="immagine-${i}">
  </div>
  `
}

containerThumb.innerHTML = imgThumb +
`
<i id="arrow-up" class="bi bi-arrow-up-square-fill arrow up"></i>
<i id="arrow-down" class="bi bi-arrow-down-square-fill arrow down"></i>
`;

const arrowUp = document.getElementById('arrow-up');
const arrowDown = document.getElementById('arrow-down');

//  Recupero TUTTE le Slide e imposto active alla i=0

const slide = document.querySelectorAll('.slide');
const thumb = document.querySelectorAll('.thumb');
let currentActiveIndex = 0;
slide[currentActiveIndex].classList.add('active');
thumb[currentActiveIndex].classList.add('selected');




arrowDown.addEventListener('click', function() {

  // Rimuovo la classe alla slide attiva in questo momento
  slide[currentActiveIndex].classList.remove('active');
  thumb[currentActiveIndex].classList.remove('selected');


  // Incremento l'indice per passare alla slide successiva
  currentActiveIndex++;

  // Se le immagini sono finite, però, porto l'indice a 0
  if (currentActiveIndex === data.length) {
    currentActiveIndex = 0;
  }
    
  // e aggiungo la classe active
  slide[currentActiveIndex].classList.add('active');
  thumb[currentActiveIndex].classList.add('selected');

});



arrowUp.addEventListener('click', function() {

  console.log(currentActiveIndex);
  // Rimuovo la classe alla slide attiva in questo momento
  slide[currentActiveIndex].classList.remove('active');
  thumb[currentActiveIndex].classList.remove('selected');

  // Incremento l'indice per passare alla slide successiva
  currentActiveIndex--;

  // Se le immagini sono finite, però, porto l'indice a 0
  if (currentActiveIndex < 0) {
    currentActiveIndex = slide.length -1;
  }

  // e aggiungo la classe active
  slide[currentActiveIndex].classList.add('active');
  thumb[currentActiveIndex].classList.add('selected');
    
});

