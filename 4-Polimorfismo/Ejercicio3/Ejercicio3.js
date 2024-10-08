// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Animal
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    sonido() {
        output.innerHTML += `<p>${this.nombre} hace un sonido.</p>`;
    }
}

// Clase Perro que hereda de Animal
class Perro extends Animal {
    constructor(nombre, raza, tamanio) {
        super(nombre);
        this.raza = raza;
        this.tamanio = tamanio;
    }

    sonido() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Animal: Perro</p>`;
        output.innerHTML += `<p>Nombre: ${this.nombre}</p>`;
        output.innerHTML += `<p>Raza: ${this.raza}</p>`;
        output.innerHTML += `<p>Tamaño: ${this.tamanio}</p>`;
        output.innerHTML += `<p>Sonido: Guau Guau</p><br>`;
    }
}

// Clase Gato que hereda de Animal
class Gato extends Animal {
    constructor(nombre, color, edad) {
        super(nombre);
        this.color = color;
        this.edad = edad;
    }

    sonido() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Animal: Gato</p>`;
        output.innerHTML += `<p>Nombre: ${this.nombre}</p>`;
        output.innerHTML += `<p>Color: ${this.color}</p>`;
        output.innerHTML += `<p>Edad: ${this.edad} años</p>`;
        output.innerHTML += `<p>Sonido: Miau Miau</p><br>`;
    }
}

// Clase Pájaro que hereda de Animal
class Pajaro extends Animal {
    constructor(nombre, tipo, puedeVolar) {
        super(nombre);
        this.tipo = tipo;
        this.puedeVolar = puedeVolar;
    }

    sonido() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Animal: Pájaro</p>`;
        output.innerHTML += `<p>Nombre: ${this.nombre}</p>`;
        output.innerHTML += `<p>Tipo: ${this.tipo}</p>`;
        output.innerHTML += `<p>¿Puede Volar?: ${this.puedeVolar ? 'Sí' : 'No'}</p>`;
        output.innerHTML += `<p>Sonido: Pío Pío</p><br>`;
    }
}

// Función que muestra el sonido y la descripción de cualquier animal
function mostrarSonido(animal) {
    animal.sonido();
}

// Instanciación de los animales con los nombres solicitados
const perro = new Perro("Zeus", "Labrador", "Grande");
const gato = new Gato("Carlota", "Blanco", 3);
const pajaro = new Pajaro("Canario", "Canario", true);

// Llamar a la función mostrarSonido para cada objeto
mostrarSonido(perro);
mostrarSonido(gato);
mostrarSonido(pajaro);
