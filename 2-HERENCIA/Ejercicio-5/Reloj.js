class Reloj {
    // Constructor
    constructor(marca, tipo, material) {
        this.marca = marca;
        this.tipo = tipo;
        this.material = material;
        this.precio = parseFloat(prompt("Ingrese el precio del reloj:"));
    }

    // Método para registrar la información básica del reloj
    registrar() {
        document.write("<hr>");
        document.write("<div class='alert alert-primary' role='alert'>RELOJ REGISTRADO</div>");
        document.write("<hr>");
        document.write("Marca: " + this.marca + "<br>");
        document.write("Tipo: " + this.tipo + "<br>");
        document.write("Material: " + this.material + "<br>");
        document.write("Precio: $" + this.precio + "<br>");
    }
}

class RelojInteligente extends Reloj {  // Subclase RelojInteligente
// Constructor
    constructor(marca, tipo, material, pantalla, sistemaOperativo) {
        super(marca, tipo, material);  
        this.pantalla = pantalla;
        this.sistemaOperativo = sistemaOperativo;
    }

    // Método para registrar la información específica del reloj inteligente
    registrarRelojInteligente() {
        this.registrar();
        document.write("Pantalla: " + this.pantalla + "<br>");
        document.write("Sistema operativo: " + this.sistemaOperativo + "<br>");
    }
}

// Instanciando la subclase RelojInteligente
const objetoReloj = new RelojInteligente('Apple', 'Deportivo', 'Aluminio', 'OLED', 'watchOS');
objetoReloj.registrarRelojInteligente();
