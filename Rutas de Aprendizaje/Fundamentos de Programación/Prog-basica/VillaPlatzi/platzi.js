// Guardar el contexto de mi etiqueta canvas
var vp = document.getElementById("villaplatzi")
// 2d debe estar en minusculas
var papel = vp.getContext("2d")

var fondo = {
    url: "tile.png",
    cargaOk: false
}
var vaca = {
    url: "vaca.png",
    cargaOk: false
}
var cerdo = {
    url: "cerdo.png",
    cargaOk: false,
    x: 0,
    y: 0
}
var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};


// Hacemos una instancia de la clase Image
// Estamos creando una etiqueta img de HTML
fondo.imagen  = new Image()
fondo.imagen.src = fondo.url
fondo.imagen.addEventListener("load", cargarFondo)

vaca.imagen  = new Image()
vaca.imagen.src = vaca.url
vaca.imagen.addEventListener("load", cargarVacas)

cerdo.imagen  = new Image()
cerdo.imagen.src = cerdo.url
cerdo.imagen.addEventListener("load", cargarCerdo)
document.addEventListener("keydown", moverCerdo)

function moverCerdo(evento){
    switch (evento.keyCode) {
        case teclas.UP:
            if(cerdo.y >= 10)
            {
                cerdo.y -= 10
            }
            dibujar()
            break;
        case teclas.DOWN:
            if(cerdo.y <= 410)
            {
                cerdo.y += 10
            }
            dibujar()
            break;
        case teclas.LEFT:
            if(cerdo.x >= 10)
            {
                cerdo.x -= 10
            }
            dibujar()
            break;
        case teclas.RIGHT:
            if(cerdo.x <= 410)
            {
                cerdo.x += 10
            }
            dibujar()
            break;
        default:
            console.log("Default")
    }
}

var cantidad = aleatorio(5, 25)

function cargarFondo() 
{
    fondo.cargaOk = true
    dibujar()
}
function cargarVacas() 
{
    vaca.cargaOk = true
    dibujar()
}
function cargarCerdo() 
{
    cerdo.cargaOk = true
    dibujar()
}

function dibujar() 
{
    if(fondo.cargaOk)
    {
        papel.drawImage(fondo.imagen, 0, 0)
    }
    if(vaca.cargaOk)
    {
        for(var v = 0; v < cantidad; v++)
        {
            var x = aleatorio(0, 420)
            var y = aleatorio(0, 420)
            papel.drawImage(vaca.imagen, x, y)
        }
    }
    if(cerdo.cargaOk)
    {
        console.log(cerdo.x)
        console.log(cerdo.y)
        papel.drawImage(cerdo.imagen, cerdo.x, cerdo.y)
    }
}



function aleatorio(min, max) 
{
    var resultado
    resultado = Math.floor(Math.random() * (max - min + 1)) + min
    return resultado
}
