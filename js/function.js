//funzione countdown
function contenitoreCountDown() {
    timer--;
    if (timer >= 0) {
        countDown.innerHTML = `${timer}`;
    } else {
        clearInterval(timerId);
        listaNumeri.classList.add('d-none')
        inputRisposta.classList.remove('d-none')
        istruzioniGiocatore.innerHTML = 'inserisci i numeri '
    }
}
//funzione che confronta i due numeri e stampa il risultato in html
function confrontoNumeri(event) {
    event.preventDefault();
    for (let i = 0; i < inputNumeriGiocatore.length; i++) {
        let numeriInseriti = parseInt(inputNumeriGiocatore[i].value)
        if (numeriRandom.includes(numeriInseriti)) {
            numeriGiocatore.push(numeriInseriti)
        }
    }
    risultatoIndovinati.innerHTML = `Hai indovinato ${numeriGiocatore.length} numeri!<br/>
    i numeri indovinati sono ${numeriGiocatore.join(", ")}`
}