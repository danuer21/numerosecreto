
let numeroAleatorioSecreto = 0;
let numeroIntentos = 0;
let listaNumerosUsados = [];
let numeroMaximo = 10;

console.log(numeroAleatorioSecreto);

function asignarTextoElemento(elemento, texto) {
    let tituloHTML = document.querySelector(elemento);
    tituloHTML.innerHTML = texto;
}

function usuarioBlueRanger() {
    let numeroDeUsuario =  parseInt(document.getElementById("valorUsuario").value);

    console.log(numeroIntentos);

    if (numeroDeUsuario === numeroAleatorioSecreto) {
        asignarTextoElemento('p', `Has adivinado el número secreto en ${numeroIntentos} ${(numeroIntentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        // el usuario no acertó.
        if (numeroDeUsuario > numeroAleatorioSecreto) 
            asignarTextoElemento('p', 'Tú número secreto es menor');
        
        else {
            asignarTextoElemento('p', 'Tú número secreto es mayor')
        }
        numeroIntentos++;
        limpiar();  
    }
    
    return;
}

function limpiar() {
   document.querySelector('#valorUsuario').value = '' ;
}

function numeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosUsados);
    // si ya sorteamos todos los numeros
    if (listaNumerosUsados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya has adivinado todos los números posibles');

    } else {
        // si el numero generado está incluido en la lista
        if (listaNumerosUsados.includes(numeroGenerado)) {
            return numeroAleatorio();
        } else {
            listaNumerosUsados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', '¿Serás capaz de adivinar el número secreto?');
    asignarTextoElemento('p', `Indica un número entre el 1 y ${numeroMaximo}.`);
    numeroAleatorioSecreto = numeroAleatorio();
    numeroIntentos = 1;
}

function reiniciarJuego() {
    // limpiar la caja
    limpiar();
    // indicar mensaje de intervalos de numeros
    condicionesIniciales();
    // generar el múmero aleatorio
    // deshabilitar el boton de nuevo juego
    // inicializar el número de intentos
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();