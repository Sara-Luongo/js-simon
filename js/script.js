let countDown = document.querySelector('#countdown')
const listaNumeri = document.querySelector('#numbers-list')
const inputRisposta = document.querySelector('#answers-form')
const istruzioniGiocatore = document.querySelector('#instructions')
const inputNumeriGiocatore = document.querySelectorAll('input')
const bottoneConferma = document.querySelector('#bottone-conferma')
const risultatoIndovinati = document.querySelector('#message')
const numeriRandom = []
const numeriGiocatore = []
let timer = 5


// creato ciclo for che genera 5 numeri casuali da 1 a 50
for (let i = 1; i <= 5; i++) {
    let numeroEstratto = Math.floor(Math.random() * 50) + 1
    numeriRandom.push(numeroEstratto)
    listaNumeri.innerHTML += ` ${numeroEstratto} `;
};


bottoneConferma.addEventListener('click', confrontoNumeri)

const timerId = setInterval(contenitoreCountDown, 1000);