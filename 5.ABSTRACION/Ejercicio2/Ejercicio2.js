class Empleado {
    calcularSalario() {
        throw new Error('Este método debe ser implementado por una subclase');
    }
}

class EmpleadoTiempoCompleto extends Empleado {
    constructor(salarioMensual) {
        super();
        this.salarioMensual = salarioMensual;
    }

    calcularSalario() {
        return this.salarioMensual;
    }
}

class EmpleadoPorHoras extends Empleado {
    constructor(horasTrabajadas, tarifaPorHora) {
        super();
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaPorHora = tarifaPorHora;
    }

    calcularSalario() {
        return this.horasTrabajadas * this.tarifaPorHora;
    }
}

// Uso de las clases
const empleado1 = new EmpleadoTiempoCompleto(3000);
document.write(`Salario del empleado a tiempo completo: ${empleado1.calcularSalario()}<br>`);

const empleado2 = new EmpleadoPorHoras(160, 20);
document.write(`Salario del empleado por horas: ${empleado2.calcularSalario()}<br>`);
