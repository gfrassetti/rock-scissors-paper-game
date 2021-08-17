let secuenciaJugador = []
let secuenciaMaquina = []
const $manos = document.querySelector('.manos')


document.querySelector('button').onclick = empezarJuego
ocultarManos()


function empezarJuego()
{
    mostrarManos()
    seleccionarJugada()
  
}
function mostrarManos()
{
    $manos.className = 'manos'
}

function ocultarManos()
{
    $manos.className = 'oculto'
}

function seleccionarJugada(e)
{
    let jugadaMaquina = obtenerManoAleatoria()
    let $mano = e.target;
    resaltarMano($mano)
    mostrarManoEnPantalla($mano)
    console.log(e)


    if ($mano.id === jugadaMaquina.id)
    {
        print("Empate")
        document.querySelector('#resultado').textContent = 'Empate'
    }

}

function obtenerManoAleatoria()
{
    const $img = document.querySelectorAll('.manos img')
    console.log($img)

    var randomImg = Math.floor(Math.random() * $img.length)
    console.log(randomImg)
    return randomImg

}

function resltarMano($mano)
{
    $mano.style.opacity = 1
    setTimeout(function () { $mano.style.opacity = 0.5;}, 500)
}

function mostrarManoEnPantalla($mano)
{
    const $jugadaEnPantalla = document.querySelector('#imagen-jugador')
    $jugadaEnPantalla.appendChild($mano)
}