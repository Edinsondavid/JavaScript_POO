// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase base InstrumentoMusical
class InstrumentoMusical {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }

    // Método tocar que será sobrescrito por las clases derivadas
    tocar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Instrumento: ${this.constructor.name}</p>`;
        output.innerHTML += `<p>Nombre: ${this.nombre}</p>`;
        output.innerHTML += `<p>Tipo: ${this.tipo}</p>`;
        output.innerHTML += `<br>`;
    }
}

// Clase Guitarra que hereda de InstrumentoMusical
class Guitarra extends InstrumentoMusical {
    constructor(nombre, tipo, cuerdas) {
        super(nombre, tipo);
        this.cuerdas = cuerdas;
    }

    // Sobrescribe el método tocar para Guitarra
    tocar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Instrumento: Guitarra</p>`;
        output.innerHTML += `<p>Nombre: ${this.nombre}</p>`;
        output.innerHTML += `<p>Tipo: ${this.tipo}</p>`;
        output.innerHTML += `<p>Número de cuerdas: ${this.cuerdas}</p>`;
        output.innerHTML += `<br>`;
    }
}

// Clase Piano que hereda de InstrumentoMusical
class Piano extends InstrumentoMusical {
    constructor(nombre, tipo, teclas) {
        super(nombre, tipo);
        this.teclas = teclas;
    }

    // Sobrescribe el método tocar para Piano
    tocar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Instrumento: Piano</p>`;
        output.innerHTML += `<p>Nombre: ${this.nombre}</p>`;
        output.innerHTML += `<p>Tipo: ${this.tipo}</p>`;
        output.innerHTML += `<p>Número de teclas: ${this.teclas}</p>`;
        output.innerHTML += `<br>`;
    }
}

// Clase Trompeta que hereda de InstrumentoMusical
class Trompeta extends InstrumentoMusical {
    constructor(nombre, tipo, material) {
        super(nombre, tipo);
        this.material = material;
    }

    // Sobrescribe el método tocar para Trompeta
    tocar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Instrumento: Trompeta</p>`;
        output.innerHTML += `<p>Nombre: ${this.nombre}</p>`;
        output.innerHTML += `<p>Tipo: ${this.tipo}</p>`;
        output.innerHTML += `<p>Material: ${this.material}</p>`;
        output.innerHTML += `<br>`;
    }
}

// Función que muestra la información de cualquier instrumento
function mostrarInformacion(instrumento) {
    instrumento.tocar();
}

// Instanciación de los instrumentos musicales
const guitarra = new Guitarra("Guitarra Acústica", "Cuerda", 6);
const piano = new Piano("Piano de Cola", "Teclado", 88);
const trompeta = new Trompeta("Trompeta B", "Metal", "Latón");

// Llamar a la función para mostrar la información de los instrumentos
mostrarInformacion(guitarra);
mostrarInformacion(piano);
mostrarInformacion(trompeta);