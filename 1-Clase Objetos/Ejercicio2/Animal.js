// Creación de la clase Animal
class Animal {

    // Método Constructor
    constructor(especie, nombre, edad, color, peso) {
        this.especie = especie;
        this.nombre = nombre;
        this.edad = edad;
        this.color = color;
        this.peso = peso;
    }

    // Método para mostrar los detalles del animal
    mostrar_detalles() {
        document.write("<h3> Animales </h3><br>");
        document.write("Especie: " + this.especie + "<br>");
        document.write("Nombre: " + this.nombre + "<br>");
        document.write("Edad: " + this.edad + "<br>");
        document.write("Color: " + this.color + "<br>");
        document.write("Peso: " + this.peso + "<br>");
        document.write("<hr>");
    }

    // Método para simular que el animal está comiendo
    comida() {
        let comida = prompt("¿Es hora de la comida (si/no) : ")

        if (comida === "si"){
            document.write("Al " + this.especie +  "Es hora del alimento <br>")
            document.write("<hr>")
        }
        else {
            document.write("El " + this.especie + this.color + "Es hora del alimento <br>")
            document.write("<hr>")
        }   
    }
}

// Creación de los objetos Animal
let animal1 = new Animal(" Gato ", " Carlota ", " 6 Años ",  " Blanco ", " 10 Kg ");
let animal2 = new Animal(" Perro ", " Manolo ", " 2 Años ", " Negro ", " 4 Kg ");
let animal3 = new Animal(" Cerdo ", " Pirulo ", " 5 Años ", "Negro ", " 400 Kg ");

// Mostrar los detalles de cada objeto y simular que están comiendo
animal1.mostrar_detalles();
animal1.comida();
animal2.mostrar_detalles();
animal2.comida();
animal3.mostrar_detalles();
animal3.comida();
