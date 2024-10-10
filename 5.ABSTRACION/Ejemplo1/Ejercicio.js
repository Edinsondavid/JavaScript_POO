class FormaGeometrica {
    calcularArea() {
        throw new Error('Este método debe ser implementado por una subclase');
    }
}

class Cuadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado ** 2;
    }
}

class Circulo extends FormaGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }

    calcularArea() {
        return Math.PI * (this.radio ** 2);
    }
}

// Uso de las clases
const cuadrado = new Cuadrado(5);
document.write(`<h2 class="text-white">Área del cuadrado: ${cuadrado.calcularArea()}</h2><br>`);

const circulo = new Circulo(3);
document.write(`<h2 class="text-white">Área del círculo: ${circulo.calcularArea()}</h2>`);
