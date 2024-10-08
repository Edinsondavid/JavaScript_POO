// Creación de la clase Carro
class Carro {

    // Método Constructor
    constructor(marca, modelo, año, color, peso) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.peso = peso;
    }

    // Método para mostrar los detalles del carro
    mostrar_detalles() {
        document.write("<h3> Carros </h3><br>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Modelo: " + this.modelo + "<br>");
        document.write("Año: " + this.año + "<br>");
        document.write("Color: " + this.color + "<br>");
        document.write("Peso: " + this.peso + "<br>");
        document.write("<hr>");
    }

    // Método para simular que el carro necesita combustible
    combustible() {
        let necesitaCombustible = prompt("¿El carro necesita combustible? (si/no): ");

        if (necesitaCombustible === "si"){
            document.write("El " + this.marca + " " + this.modelo + " necesita combustible.<br>");
            document.write("<hr>");
        }
        else {
            document.write("El " + this.marca + " " + this.modelo + " tiene suficiente combustible.<br>");
            document.write("<hr>");
        }   
    }
}

// Creación de los objetos Carro
let carro1 = new Carro("Toyota", "Corolla", "2020", "Rojo", "1500 Kg");
let carro2 = new Carro("Ford", "Mustang", "2022", "Azul", "1800 Kg");
let carro3 = new Carro("Chevrolet", "Camaro", "2021", "Negro", "1700 Kg");

// Mostrar los detalles de cada carro y simular si necesitan combustible
carro1.mostrar_detalles();
carro1.combustible();
carro2.mostrar_detalles();
carro2.combustible();
carro3.mostrar_detalles();
carro3.combustible();

