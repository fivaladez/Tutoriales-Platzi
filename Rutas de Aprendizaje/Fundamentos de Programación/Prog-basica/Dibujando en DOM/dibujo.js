var d = document.getElementById("dibujito");
// Obtener el lienzo en solo dos dimensiones
var lienzo = d.getContext("2d");
var ancho = d.width;
var alto = d.height;

var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

function dibujar(color, x_initial, y_initial, x_end, y_end) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(x_initial, y_initial);
    lienzo.lineTo(x_end, y_end);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick() {
    var lineas = parseInt(texto.value);
    // Define la separación entre líneas y hace que se complete el dibujo sin importar el número de lineas
    var separacion = ancho / lineas;
    var x, y;

    for (l = 0; l < lineas; l++) {
        y = separacion * l;
        x = separacion * (l + 1);
        dibujar("green", 0, y, x, alto);
        dibujar("blue", x, 0, ancho, y);

        y = separacion * l;
        x = alto - (separacion * (l + 1));
        dibujar("violet", ancho, y, x, alto);
        
        x = ancho - (separacion * l);
        y = separacion * (l + 1);
        dibujar("red", x, 0, 0, y);
    }
}
