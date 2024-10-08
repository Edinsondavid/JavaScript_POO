class Producto {
    // Constructor de la clase
    constructor(nombre, precio, cantidad, categoria) {
        // Atributos privados
        this._nombre = nombre;
        this._precio = precio;
        // Atributos públicos
        this.cantidad = cantidad;
        this.categoria = categoria;
    }

    // Getters para los atributos privados
    obtenerNombre() {
        return this._nombre;
    }

    obtenerPrecio() {
        return this._precio;
    }

    // Setters para los atributos privados
    establecerNombre(nombre) {
        this._nombre = nombre;
    }

    establecerPrecio(precio) {
        this._precio = precio;
    }

    // Método para mostrar toda la información del producto
    mostrarInformacion() {
        document.write(`Nombre: ${this._nombre}<br>`);
        document.write(`Precio: ${this._precio}<br>`);
        document.write(`Cantidad: ${this.cantidad}<br>`);
        document.write(`Categoría: ${this.categoria}<br>`);
    }
}

// Creación de un objeto de la clase Producto
const producto = new Producto("Laptop", 1500, 10, "Electrónica");

// Mostrar la información del producto
producto.mostrarInformacion();

document.write("<hr>");

// Modificar algunos atributos usando setters
producto.establecerNombre("Tablet");
producto.establecerPrecio(500);

// Mostrar la información actualizada del producto
producto.mostrarInformacion();
