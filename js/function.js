//funzione countdown
function contenitoreCountDown() {
    timer--;
    if (timer >= 0) {
        CountDown.innerHTML = `${timer}`;
    } else {
        clearInterval(timerId);
        listaNumeri.classList.add('d-none')
        inputRisposta.classList.remove('d-none')
        istruzioniGiocatore.innerHTML = 'inserisci i numeri '
    }
}