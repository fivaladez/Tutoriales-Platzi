// Arays (Listas)
// Similar a un diccionario en Python = Array asosiativo
// En vez de posición ser un número, es un nombre
var imagenes = []
imagenes["Cauchin"] = "vaca.png"
imagenes["Pokacho"] = "pollo.png"
imagenes["Tocinauro"] = "cerdo.png"

console.log(imagenes)
console.log(imagenes["Cauchin"])


class Pakiman 
{
    constructor(nombre, vida, ataque)
    {
        this.imagen = new Image()
        this.nombre = nombre
        this.vida = vida
        this.ataque = ataque

        this.imagen.src = imagenes[this.nombre]
    }

    // Todo bloque de código se entiende que es una función
    hablar()
    {
        alert(this.nombre)
    }

    mostrar()
    {
        document.body.appendChild(this.imagen)
        document.write("<br />Nombre: <strong>" + this.nombre + "</strong> <br />")
        document.write("Vida: <strong>" + this.vida + "</strong> <br />")
        document.write("Ataque: <strong>" + this.ataque + "</strong> <br /><hr />")
    }
    
}