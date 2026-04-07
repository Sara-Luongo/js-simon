//funzione countdown
function contenitoreCountDown() {
    timer--;
    if (timer >= 0) {
        CountDown.innerHTML = `${timer}`;
    } else {
        clearInterval(timerId);
    }
}