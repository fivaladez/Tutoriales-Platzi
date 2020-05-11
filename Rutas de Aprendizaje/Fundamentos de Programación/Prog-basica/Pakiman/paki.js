// Instacia de una clase es un objeto
var coleccion = []
coleccion.push(new Pakiman("Cauchin", 100, 30))
coleccion.push(new Pakiman("Pokacho", 80, 50))
coleccion.push(new Pakiman("Tocinauro", 120, 40))

// of - regresa el indice
for(var pakiman of coleccion)
{
    // console.log(pakiman.hablar())
    pakiman.mostrar()
}


