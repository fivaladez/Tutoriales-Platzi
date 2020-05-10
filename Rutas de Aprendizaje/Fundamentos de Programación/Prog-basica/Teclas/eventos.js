var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
dibujarLinea("red", x - 1, y - 1, x + 1, y + 1, papel);

function dibujarTeclado(evento) {
    var colorcito = "blue"
    var movimiento = 1;
    switch (evento.keyCode) {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel)
            y = y - movimiento
            break;
        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel)
            y = y + movimiento
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel)
            x = x - movimiento
            break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel)
            x = x + movimiento
            break;
        default:
            console.log("Default")
    }
}
function dibujarLinea(color, x_initial, y_initial, x_end, y_end, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(x_initial, y_initial);
    lienzo.lineTo(x_end, y_end);
    lienzo.stroke();
    lienzo.closePath();
}

click = false;
document.addEventListener("mousedown", dibujarMouseDown);
function dibujarMouseDown() {
    click = true;
}
document.addEventListener("mouseup", dibujarMouseUp);
function dibujarMouseUp() {
    click = false;
}
document.addEventListener("mousemove", dibujarMouseMove);
function dibujarMouseMove(evento) {
    if (evento.toElement.localName = "canvas" && click == true) {
        dibujarLinea("black", evento.layerX, evento.layerY, evento.layerX + 1, evento.layerY + 1, papel)
    }

}