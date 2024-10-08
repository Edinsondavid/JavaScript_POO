// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase base Profesional
class Profesional {
    constructor(nombre, especialidad) {
        this.nombre = nombre;
        this.especialidad = especialidad;
    }

    // Método trabajar que será sobrescrito por las clases derivadas
    trabajar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Profesional: ${this.constructor.name}</p>`;
        output.innerHTML += `<p>Nombre: ${this.nombre}</p>`;
        output.innerHTML += `<p>Especialidad: ${this.especialidad}</p>`;
        output.innerHTML += `<br>`;
    }
}

// Clase Médico que hereda de Profesional
class Medico extends Profesional {
    constructor(nombre, especialidad, hospital) {
        super(nombre, especialidad);
        this.hospital = hospital;
    }

    // Sobrescribe el método trabajar para Médico
    trabajar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Profesional: Médico</p>`;
        output.innerHTML += `<p>Nombre: ${this.nombre}</p>`;
        output.innerHTML += `<p>Especialidad: ${this.especialidad}</p>`;
        output.innerHTML += `<p>Hospital: ${this.hospital}</p>`;
        output.innerHTML += `<p>Trabajo: Diagnosticar y tratar enfermedades.</p>`;
        output.innerHTML += `<br>`;
    }
}

// Clase Ingeniero que hereda de Profesional
class Ingeniero extends Profesional {
    constructor(nombre, especialidad, empresa) {
        super(nombre, especialidad);
        this.empresa = empresa;
    }

    // Sobrescribe el método trabajar para Ingeniero
    trabajar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Profesional: Ingeniero</p>`;
        output.innerHTML += `<p>Nombre: ${this.nombre}</p>`;
        output.innerHTML += `<p>Especialidad: ${this.especialidad}</p>`;
        output.innerHTML += `<p>Empresa: ${this.empresa}</p>`;
        output.innerHTML += `<p>Trabajo: Diseñar y optimizar sistemas o estructuras.</p>`;
        output.innerHTML += `<br>`;
    }
}

// Clase Docente que hereda de Profesional
class Docente extends Profesional {
    constructor(nombre, especialidad, escuela) {
        super(nombre, especialidad);
        this.escuela = escuela;
    }

    // Sobrescribe el método trabajar para Docente
    trabajar() {
        output.innerHTML += `<hr>`;
        output.innerHTML += `<p>Profesional: Docente</p>`;
        output.innerHTML += `<p>Nombre: ${this.nombre}</p>`;
        output.innerHTML += `<p>Especialidad: ${this.especialidad}</p>`;
        output.innerHTML += `<p>Escuela: ${this.escuela}</p>`;
        output.innerHTML += `<p>Trabajo: Enseñar y guiar a los estudiantes en su aprendizaje.</p>`;
        output.innerHTML += `<br>`;
    }
}

// Función que muestra la información de cualquier profesional
function mostrarInformacion(profesional) {
    profesional.trabajar();
}

// Instanciación de los profesionales
const medico = new Medico("Dr. Juan Pérez", "Cardiología", "Hospital Central");
const ingeniero = new Ingeniero("Ing. Laura García", "Civil", "Construcciones S.A.");
const docente = new Docente("Prof. Carlos Díaz", "Matemáticas", "Escuela Secundaria");

// Llamar a la función para mostrar la información de los profesionales
mostrarInformacion(medico);
mostrarInformacion(ingeniero);
mostrarInformacion(docente);
