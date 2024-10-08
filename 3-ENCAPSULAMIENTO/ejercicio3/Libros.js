class Libro {
    // Constructor de la clase
    constructor(titulo, autor, isbn, editorial) {
        // Atributos privados
        this._titulo = titulo;
        this._autor = autor;
        this._isbn = isbn;
        // Atributo público
        this.editorial = editorial;
    }

    // Getters para los atributos privados
    obtenerTitulo() {
        return this._titulo;
    }

    obtenerAutor() {
        return this._autor;
    }

    obtenerIsbn() {
        return this._isbn;
    }

    // Setters para los atributos privados
    establecerTitulo(titulo) {
        this._titulo = titulo;
    }

    establecerAutor(autor) {
        this._autor = autor;
    }

    establecerIsbn(isbn) {
        this._isbn = isbn;
    }

    // Método para mostrar toda la información del libro
    mostrarInformacion() {
        document.write(`Título: ${this._titulo}<br>`);
        document.write(`Autor: ${this._autor}<br>`);
        document.write(`ISBN: ${this._isbn}<br>`);
        document.write(`Editorial: ${this.editorial}<br>`);
    }
}

// Crear un objeto de la clase Libro
const libro = new Libro("El Quijote", "Miguel de Cervantes", "978-3-16-148410-0", "Editorial Planeta");

// Mostrar la información del libro
libro.mostrarInformacion();

document.write("<hr>");

// Modificar algunos atributos usando setters
libro.establecerTitulo("Cien años de soledad");
libro.establecerAutor("Gabriel García Márquez");
libro.establecerIsbn("978-84-376-0494-7");

// Mostrar la información actualizada del libro
libro.mostrarInformacion();
