let puntajeUsuario = 0
let puntajeMaquina = 0
const $manos = document.querySelector('.manos')


document.querySelector('button').onclick = empezarJuego
ocultarManos()
ocultarBotonReset()

function ocultarBotonReset()
{
    const $reset = document.querySelector('#reset')
    $reset.className = 'oculto'
}

function mostarBotonReset()
{
    const $reset = document.querySelector('#reset')
    $reset.className = "btn btn-outline-info btn-lg"
}


function empezarJuego()
{
    mostrarManos()
    ocultarBotonJugar()
    cambiarEstadoAlComenzar()
    document.querySelectorAll('.manos img').forEach(function ($jugadaUsuario) {
        $jugadaUsuario.onclick = seleccionarJugada
    })
  
}
function mostrarManos()
{
    $manos.className = 'manos'
}

function ocultarManos()
{
    $manos.className = 'oculto'
}

function resaltarMano($jugadaUsuario)
{
    $jugadaUsuario.style.opacity = 1
    setTimeout(function () { $jugadaUsuario.style.opacity = 0.8;}, 62)
}

function seleccionarJugada(e)
{
    let jugadaMaquina = obtenerManoAleatoria()
    let $jugadaUsuario = e.target;
    resaltarMano($jugadaUsuario)
    mostrarManoEnPantallaJugador($jugadaUsuario)
    mostrarManoenPantallaMaquina(jugadaMaquina)
    console.log(e)

    jugadas($jugadaUsuario, jugadaMaquina)
    resultadoPartida(puntajeUsuario, puntajeMaquina)
}

function obtenerManoAleatoria()
{
    const $img = document.querySelectorAll('.manos img')
    let $manoAleatoria = Math.floor(Math.random() * $img.length)
    return $img[$manoAleatoria]
}



function mostrarManoEnPantallaJugador($jugadaUsuario)
{
    const $jugadaEnPantalla = document.querySelector('#imagen-jugador')
    $jugadaEnPantalla.textContent = $jugadaUsuario.id
}

function mostrarManoenPantallaMaquina($jugadaMaquina)
{
    const $jugadaEnPantalla = document.querySelector('#imagen-maquina')
    $jugadaEnPantalla.textContent = $jugadaMaquina.id
}


function puntosMaquina(puntajeMaquina)
{
    document.querySelector('#maquina').textContent = 'Maquina: ' + puntajeMaquina
}

function puntosUsuario(puntajeUsuario)
{
    document.querySelector('#jugador').textContent = 'Jugador: ' + puntajeUsuario
}

function cambiarResultadoEnPantalla($jugada)
{
    document.querySelector('#resultado').textContent = 'Gana: '  + $jugada +'!' 
}

function jugadas($jugadaUsuario, jugadaMaquina)
{
    if ($jugadaUsuario.id === jugadaMaquina.id)
    {
        console.log('Empate!')
        document.querySelector('#resultado').textContent = 'Es un Empate!'
 
    }
    if ($jugadaUsuario.id === 'piedra' && jugadaMaquina.id === 'papel')
    {
        console.log('Gana papel!')
        puntajeMaquina++;
        puntosMaquina(puntajeMaquina)
        cambiarResultadoEnPantalla(jugadaMaquina.id)
    }
    if ($jugadaUsuario.id === 'papel' && jugadaMaquina.id === 'piedra')
    {
        console.log('Gana papel!')
        puntajeUsuario++;
        puntosUsuario(puntajeUsuario)
        cambiarResultadoEnPantalla($jugadaUsuario.id)
    }
    if ($jugadaUsuario.id === 'papel' && jugadaMaquina.id === 'tijera')
    {
        console.log('Gana tijera!')
        puntajeMaquina++;
        puntosMaquina(puntajeMaquina)
        cambiarResultadoEnPantalla(jugadaMaquina.id)
    }
    if ($jugadaUsuario.id === 'tijera' && jugadaMaquina.id === 'papel')
    {
        console.log('Gana tijera!')
        puntajeUsuario++;
        puntosUsuario(puntajeUsuario)
        cambiarResultadoEnPantalla($jugadaUsuario.id)
    }
    if ($jugadaUsuario.id === 'tijera' && jugadaMaquina.id === 'piedra')
    {
        console.log('Gana piedra!')
        puntajeMaquina++;
        puntosMaquina(puntajeMaquina)
        cambiarResultadoEnPantalla(jugadaMaquina.id)
    }
    if ($jugadaUsuario.id === 'piedra' && jugadaMaquina.id === 'tijera')
    {
        console.log('Gana piedra!')
        puntajeUsuario++;
        puntosUsuario(puntajeUsuario)
        cambiarResultadoEnPantalla($jugadaUsuario.id)
    }
    

}

function ocultarBotonJugar()
{
    document.querySelector('#jugar').className = 'oculto'
}

function cambiarAlert(estado, victoria=false)
{
    const $estado = document.querySelector('#estado');
    $estado.textContent = estado
    if (victoria)
    {
        $estado.classList.remove('alert-warning');
        $estado.classList.add('alert-success')
        crearBtn("btn btn-success btn-lg")
        ocultarManos()
    }
    else {
        $estado.classList.remove('alert-info');
        $estado.classList.add('alert-danger')
        crearBtn("btn btn-light btn-lg")
        ocultarManos()

    }
}
function resultadoPartida()
{
    if (puntajeUsuario === 3)
    {
        document.querySelector('#resultado').textContent = 'Ganaste!, pulsa "Reset" para comenzar de nuevo'
        cambiarAlert('Ganaste!', true)
        ocultarManos()
         
    }
    if(puntajeMaquina === 3) {
        document.querySelector('#resultado').textContent = 'Perdiste!, pulsa "Reset" para comenzar de nuevo'
        ocultarManos()
        cambiarAlert('Perdiste!', false)
    }
}

function crearBtn(className)
{

    const $estado = document.querySelector('#estado');
    const btn = document.createElement('button');
    btn.textContent = 'Reset'
    btn.className = className
    $estado.appendChild(btn)
    btn.style.position = "relative";
    btn.style.left = "30%"
    btn.onclick = actualizarPagina

}

function actualizarPagina(e)
{
    e.preventDefault()
    window.location.reload()
}

function cambiarEstadoAlComenzar()
{
    const $estado = document.querySelector('#estado')
    $estado.classList.remove('alert-info')
    $estado.classList.add('alert-warning')
    $estado.textContent = "A jugar!"
    crearBtn('btn btn-outline-warning btn-lg')
}
