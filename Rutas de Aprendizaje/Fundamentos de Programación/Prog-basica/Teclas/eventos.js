var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
document.addEventListener("keyup", dibujarTeclado);
function dibujarTeclado(evento) {
    switch (evento.keyCode) {
        case teclas.UP:
            console.log("Up")
            break;
        case teclas.DOWN:
            console.log("Down")
            break;
        case teclas.LEFT:
            console.log("Left")
            break;
        case teclas.RIGHT:
            console.log("Right")
            break;
        default:
            console.log("Default")
    }

}