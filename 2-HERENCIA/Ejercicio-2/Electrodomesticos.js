class Electrodomestico {
    constructor(marca, color, capacidad) {
        this.marca = marca
        this.color = color
        this.capacidad = capacidad
        this.consumo_electrico = parseInt(prompt("Ingrese el consumo en kWh: "))
    }
    registrar() {
        document.write(`
            <hr>
            <div class="alert alert-primart" role="alert">ELECTRODOMESTICO REGISTRADO </div>
            <hr>
            Marca: ${this.marca} <br>
            Color: ${this.color} <br>
            Capacidad en litros: ${this.capacidad} <br>
            Consumo electrico:  ${this.consumo_electrico} kWh <br>`)
    }
}

class Refrigerador extends Electrodomestico {
    constructor(marca, color, capacidad, tipo) {
        super(marca, color, capacidad)
        this.tipo = tipo
        this.temperatura = parseFloat(prompt("Ingrese la temperatura inicial en grados Centigrados: "))
    }
    funcionamiento() {
        document.write(`Tipo de Refrigerador: ${this.tipo} <br>`)
        if (this.temperatura >= 2 && this.temperatura <= 8) {
            document.write(`
                <hr>
                <div class="alert alert-success" role="alert"> El eletrodomestico ${this.marca} de tipo ${this.tipo}, tiene una temperatura actual de: ${this.temperatura}°C</div> <br>
                Su funcionamiento es CORRECTO y tiene una Temperatura ideal.
                `)
        } else {
            document.write(`
                <hr>
                <div class="alert alert-danger" role="alert"> La temperatura debe ser regulada...</div>
                `)
        }
    }
}

let refrigerador1 = new Refrigerador("Mabe","Gris",200,"Frost")
refrigerador1.registrar()
refrigerador1.funcionamiento()