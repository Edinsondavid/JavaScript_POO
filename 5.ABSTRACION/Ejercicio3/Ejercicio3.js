class Tareaempleado {
    realizar_tarea() {
        throw new Error('El método realizar_tarea() debe ser implementado');
    }
}

class Ingeniero extends Tareaempleado {
    constructor(tarea1) {
        super();
        this.tarea1 = tarea1;
    }

    realizar_tarea() {
        return this.tarea1 * 8;
    }
}

class Doctor extends Tareaempleado {
    constructor(citas) {
        super();
        this.citas = citas;
    }

    realizar_tarea() {
        return this.citas * 5;
    }
}

// Uso de las clases
const ingeniero = new Ingeniero(3);
document.write(`<h4 class="text-white">Cantidad de tareas realizadas por el ingeniero: ${ingeniero.realizar_tarea()}</h4>`);

const doctor = new Doctor(4);
document.write(`<h4 class="text-white">Cantidad de tareas realizadas por el Doctor: ${doctor.realizar_tarea()}</h4>`);