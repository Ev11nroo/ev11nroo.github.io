let y = 0;
let ySpeed = 0;
let gravityRate = 0.25;
let gravitySpeed = 0;

let falling = false;
let fallFunction;

function fall() {
    gravitySpeed += gravityRate;
    y += ySpeed + gravitySpeed;
    for (let i = document.getElementsByName('ball').length - 1; i >= 0; i--) {
        document.getElementsByName('ball')[i].style.top = `${y}px`;
    }
}

function reset() {
    y = 0
    gravitySpeed = 0
    for (let i = document.getElementsByName('ball').length - 1; i >= 0; i--) {
        document.getElementsByName('ball')[i].style.top = `0px`;
    }
}

function setBallState() {
    if (!falling) {
        fallFunction = window.setInterval(fall, 20);
        falling = true;
        document.getElementById('setState').textContent = 'pause';
        return;
    }
    window.clearInterval(fallFunction);
    document.getElementById('setState').textContent = 'start';
    falling = false;
}

function createBall() {
    document.getElementById('balls').innerHTML += `\n<p name="ball" style="top: 0px; color: rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}); left: ${Math.round(Math.random() * 100)}%">o</p>`
}