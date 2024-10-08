class Instrumento {
    // Constructor
    constructor(marca, tipo, material) {
        this.marca = marca;
        this.tipo = tipo;
        this.material = material;
        this.precio = parseFloat(prompt("Ingrese el precio del instrumento:"));
    }

    // Método para registrar la información básica del instrumento
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>INSTRUMENTO REGISTRADO</div>");
        document.write("<hr>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Tipo: " + this.tipo + "<br>");
        document.write("Material: " + this.material + "<br>");
        document.write("Precio: $" + this.precio + "<br>");
    }
}

class Guitarra extends Instrumento {  // Subclase Guitarra
    // Constructor
    constructor(marca, tipo, material, numeroCuerdas) {
        super(marca, tipo, material);  // Llamada al constructor de la superclase
        this.numeroCuerdas = numeroCuerdas;
    }

    // Método para registrar la información específica de la guitarra
    registrarGuitarra() {
        this.registrar();
        document.write("Número de Cuerdas: " + this.numeroCuerdas + "<br>");
    }
}

// Instanciando la subclase Guitarra
const objetoGuitarra = new Guitarra('Gibson', 'Eléctrica', 'Madera', 6);
objetoGuitarra.registrarGuitarra();
