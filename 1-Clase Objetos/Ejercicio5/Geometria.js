class Figurasgeometricas{
    //Metodo Constructor
    constructor(nombre,lado,vertices,angulo){
        this.nombre = nombre // propiedades para la instancia
        this.lado = lado
        this.vertices = vertices



    }

    //metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Figuras geometricas</h3><br>")
        document.write("Nombre: "+this.nombre+"<br>")
        document.write("Lado: "+this.lado+"<br>")
        document.write("Vertices: "+this.vertices+"<br>")
    }


}
//Metodo para instanciar la clase Empleado
let figurasgeometricas1 = new Figurasgeometricas("Hexagono", "6", "6")
let figurasgeometricas2 = new Figurasgeometricas("Hexagono", "6", "6")
let figurasgeometricas3 = new Figurasgeometricas("Hexagono", "6", "6")

//Mostrar los detalles de cada objeto
figurasgeometricas1.mostrarDetalles()
figurasgeometricas2.mostrarDetalles()
figurasgeometricas3.mostrarDetalles()

