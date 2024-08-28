window.addEventListener("DOMContentLoaded", (event) => {
    // Variables para contadores de minutos y segundos
    let cronoMin = document.querySelector(".crono__min");    
    let cronoSec = document.querySelector(".crono__sec");

    // Variables selección botones
    let btnStart = document.querySelector(".layout__btn-start");
    let btnStop = document.querySelector(".layout__btn-stop");
    let btnLap = document.querySelector(".layout__btn-lap");
    let btnReset = document.querySelector(".layout__btn-reset");

    // Lista de vueltas
    let lapsList = document.querySelector(".laps__list");

    // Variables para contar minutos y segundos
    let minutes = 0;
    let seconds = 0;
    let time = null;

    // Función para iniciar cronometro
    let start = () => {
        if(!time){
            time = setInterval(() => {
                seconds++;
                if(seconds == 60){
                    minutes++;
                    seconds = 0;
                }
                if(minutes >= 60){
                    alert("Has excedido el tiempo limite de 60 minutos");
                    clearInterval(time);
                }
                cronoSec.innerHTML = seconds < 10 ? "0" + seconds : seconds;
                cronoMin.innerHTML = minutes < 10 ? "0" + minutes : minutes;
            }, 1000);
        }
    };       

    // Botón iniciar
    btnStart.addEventListener("click", () => {
        start();
    });

    // Botón parar
    btnStop.addEventListener("click", () => {
        if(time){
            clearInterval(time);
            time = null;
        }
    });

    // Botón vuelta
    btnLap.addEventListener("click", () => {
        if(time) {
            let lapTime = `${cronoMin.innerHTML}:${cronoSec.innerHTML}`;
            let lapItem = document.createElement("li");
            lapItem.textContent = lapTime;
            lapsList.appendChild(lapItem);
        }
    });

    // Botón reiniciar
    btnReset.addEventListener("click", () => {
        if(time) {
            clearInterval(time);
            time = null;
        }
        minutes = 0;
        seconds = 0;
        cronoMin.innerHTML = "00";
        cronoSec.innerHTML = "00";
        lapsList.innerHTML = "";
    });
});
