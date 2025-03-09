let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let c4 = document.getElementById("c4");
let c5 = document.getElementById("c5");
let c6 = document.getElementById("c6");
let c7 = document.getElementById("c7");
let c8 = document.getElementById("c8");
let c9 = document.getElementById("c9");
let boton = document.getElementById("boton");
let info = document.getElementById("info");
let marcadorX = document.getElementById("x");
let marcadorO = document.getElementById("o");


c1.addEventListener("click", main);
c2.addEventListener("click", main);
c3.addEventListener("click", main);
c4.addEventListener("click", main);
c5.addEventListener("click", main);
c6.addEventListener("click", main);
c7.addEventListener("click", main);
c8.addEventListener("click", main);
c9.addEventListener("click", main);
boton.addEventListener("click", reiniciarJuego);

let jugadorActual = "X";
let juegoTerminado = false;
let tablero = [c1, c2, c3, c4, c5, c6, c7, c8, c9];
let x = 0, o = 0;

function main(){
  if (juegoTerminado) return;
  if (this.innerHTML == "") {
    this.innerHTML = jugadorActual;
    if (verificaTablero(tablero)) {
      info.innerHTML = "El ganador es el jugador " + jugadorActual + "!";
      sumaPunto();
      juegoTerminado = true;
    }
    else if (!compruebaVacio(tablero)) {
      info.innerHTML = "Empate";
      juegoTerminado = true;
    }
    else {
      cambiarJugador();
    }
  }
}

function cambiarJugador() {
  if (jugadorActual == "X") jugadorActual = "O";
  else jugadorActual = "X";
  info.innerHTML = "Es el turno del jugador " + jugadorActual;
}

function compruebaVacio(tablero){
  for (let c of tablero) {
    if (c.innerHTML == "") return true;
  }
  return false;
}

function verificaTablero(tablero){
  if (verificarFila(tablero[0], tablero[1], tablero[2]) ||
    verificarFila(tablero[3], tablero[4], tablero[5]) ||
    verificarFila(tablero[6], tablero[7], tablero[8]) ||
    verificarFila(tablero[0], tablero[3], tablero[6]) ||
    verificarFila(tablero[1], tablero[4], tablero[7]) ||
    verificarFila(tablero[2], tablero[5], tablero[8]) ||
    verificarFila(tablero[0], tablero[4], tablero[8]) ||
    verificarFila(tablero[2], tablero[4], tablero[6])) {
    return true;
  }
  else false;
}

function verificarFila(p1, p2, p3) {
  if (p1.innerHTML == jugadorActual &&
    p2.innerHTML == jugadorActual &&
    p3.innerHTML == jugadorActual){
      p1.classList.add("ganador");
      p2.classList.add("ganador");
      p3.classList.add("ganador");
      for (let c of tablero) {
        c.style.pointerEvents = "none";
      }
      return true;
    }
  return false;
}

function reiniciarJuego() {
  for (let c of tablero) {
    c.textContent = "";
    c.classList.remove("ganador");
    c.classList.add("cuadrado");
    c.style.pointerEvents = "auto";
  }
  jugadorActual = "X";
  info.innerHTML = "Es el turno del jugador " + jugadorActual;
  juegoTerminado = false;
}

function sumaPunto(){
  if (jugadorActual == "X") x++;
  else o++;
  marcadorX.innerHTML = x;
  marcadorO.innerHTML = o;
}