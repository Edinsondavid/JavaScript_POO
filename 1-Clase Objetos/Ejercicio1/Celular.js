class Celular {
    // Método Constructor
    constructor(nombre, marca, color, bateria, camara, precio) {
        this.nombre = nombre; // Propiedades para la instancia
        this.marca = marca;
        this.color = color;
        this.bateria = bateria;
        this.camara = camara;
        this.precio = precio;
    }

    // Método Para mostrar detalles del objeto
    mostrarDetalles() {
        document.write("<h3>Dispositivo Móvil</h3><br>");
        document.write("Nombre: " + this.nombre + "<br>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Color: " + this.color + "<br>");
        document.write("Batería: " + this.bateria + "<br>");
        document.write("Cámara: " + this.camara + "<br>");
        document.write("Precio: " + this.precio + "<br>");
        document.write("<hr>");
    }

    // Método para encender el celular
    encender() {
        // Atributo privado solo para el método encender
        let energia = parseInt(prompt("Digite el valor de la carga: "));
        // Evaluamos si tiene carga el celular
        if (energia > 0) {
            document.write("El celular: " + this.nombre + " se puede encender <br>");
            document.write(`|||||||||| ${energia} % de carga <br>`);
        } else {
            document.write("El celular: " + this.nombre + " no se puede encender <br>");
            document.write(`|||||||||| ${energia} % de carga <br>`);
        }
        document.write("<hr>");
    }
}

// Creación de objetos por medio de instanciar la clase Celular
let celular1 = new Celular("Xiaomi Mi 13T Pro", "Xiaomi", "Blanco", "5400 mAh", "64px", 1740000);
let celular2 = new Celular("Motorola G14", "Motorola", "Blanco", "5000 mAh", "64px", 1560000);
let celular3 = new Celular("iPhone", "Apple", "Blanco", "6000 mAh", "64px", 1200000);

// Mostrar los detalles de cada objeto
celular1.mostrarDetalles();
celular1.encender();
celular2.mostrarDetalles();
celular2.encender();
celular3.mostrarDetalles();
celular3.encender();

