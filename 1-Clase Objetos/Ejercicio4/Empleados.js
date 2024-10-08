// Definir la clase 
class Empleados {
    constructor(nombre, edad, profesion, cargo) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
        this.cargo = cargo;
    }

    mostrar_detalles() {
        document.write("<h3> Empleados </h3><br>");
        document.write("Nombre: " + this.nombre + "<br>");
        document.write("Edad: " + this.edad + "<br>");
        document.write("Profesion: " + this.profesion + "<br>");
        document.write("Cargo: " + this.cargo + "<br>");
        document.write("<hr>");
    }

    // Método para simular si el empleado necesita un descanso
    necesita_descanso() {
        let descanso = prompt("¿El Empleado Necesita Un Descanso? (si/no): ");

        if (descanso === "si") {
            document.write("El Empleado " + this.nombre + " Necesita Un Descanso.<br>");
            document.write("<hr>");
        } else {
            document.write("El Empleado " + this.nombre + " No Necesita Un Descanso.<br>");
            document.write("<hr>");
        }
    }
}

// Crear instancias de la clase Empleados
let empleado1 = new Empleados("Valery Siolo", "35 Años", "Ingeniería en Sistemas", "Profesora de Colegio");
let empleado2 = new Empleados("Juan Oviedo", "30 Años", "Asistente Administrativo", "Secretario");
let empleado3 = new Empleados("Valeria Peña", "23 Años", "Psicología", "Psicóloga");


empleado1.mostrar_detalles();
empleado1.necesita_descanso();
empleado2.mostrar_detalles();
empleado2.necesita_descanso();
empleado3.mostrar_detalles();
empleado3.necesita_descanso();
