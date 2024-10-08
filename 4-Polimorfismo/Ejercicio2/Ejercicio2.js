// Selecciona el contenedor donde se mostrará la salida
const output = document.getElementById("output");

// Clase Vehículo
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    descripcion() {
        output.innerHTML += "<hr>";
        output.innerHTML += `<p>Vehículo: ${this.marca} ${this.modelo}</p>`;
    }
}

// Clase Carro que hereda de Vehículo
class Carro extends Vehiculo {
    constructor(marca, modelo, placa, fabricante) {
        super(marca, modelo);
        this.placa = placa;
        this.fabricante = fabricante;
    }

    descripcion() {
        super.descripcion();
        output.innerHTML += `<p>Tipo: Carro</p>`;
        output.innerHTML += `<p>Placa: ${this.placa}</p>`;
        output.innerHTML += `<p>Fabricante: ${this.fabricante}</p>`;
    }
}

// Clase Moto que hereda de Vehículo
class Moto extends Vehiculo {
    constructor(marca, modelo, velocidadFinal, potencia) {
        super(marca, modelo);
        this.velocidadFinal = velocidadFinal;
        this.potencia = potencia;
    }

    descripcion() {
        super.descripcion();
        output.innerHTML += `<p>Tipo: Moto</p>`;
        output.innerHTML += `<p>Velocidad Final: ${this.velocidadFinal} km/h</p>`;
        output.innerHTML += `<p>Potencia: ${this.potencia} HP</p>`;
    }
}

// Clase Bicicleta que hereda de Vehículo
class Bicicleta extends Vehiculo {
    constructor(marca, modelo, tipoTerreno, velocidadAlcanzada, modoManejo, precio) {
        super(marca, modelo);
        this.tipoTerreno = tipoTerreno;
        this.velocidadAlcanzada = velocidadAlcanzada;
        this.modoManejo = modoManejo;
        this.precio = precio;
    }

    descripcion() {
        super.descripcion();
        output.innerHTML += `<p>Tipo: Bicicleta</p>`;
        output.innerHTML += `<p>Tipo de Terreno: ${this.tipoTerreno}</p>`;
        output.innerHTML += `<p>Velocidad Alcanzada: ${this.velocidadAlcanzada} km/h</p>`;
        output.innerHTML += `<p>Modo de Manejo: ${this.modoManejo}</p>`;
        output.innerHTML += `<p>Precio: ${this.precio}</p>`;
    }
}

// Función que muestra la descripción de cualquier vehículo
function mostrarDescripcion(vehiculo) {
    vehiculo.descripcion();
}

// Crear instancias de cada clase
const objetoCarro = new Carro("Toyota", "Corolla", "ABC123", "Toyota Motor Corporation");
const objetoMoto = new Moto("Honda", "CBR600RR", 250, 100);
const objetoBicicleta = new Bicicleta("Giant", "Talon", "Montaña", 60, "Deportiva", 600000);

// Llamar a la función mostrarDescripcion para cada objeto
mostrarDescripcion(objetoCarro);
mostrarDescripcion(objetoMoto);
mostrarDescripcion(objetoBicicleta);