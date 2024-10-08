// Super clase
class Dispositivo {
    // constructor
    constructor(marca, color, modelo) {
      this.marca = marca;
      this.color = color;
      this.modelo = modelo;
      this.capacidad_bateria = parseInt(prompt("Capacidad de la batería (mAh):")); 
    }
  
    // método público
    registrar() {
      document.write("<hr>");
      document.write("<div class='alert alert-primary' role='alert'>DISPOSITIVO REGISTRADO</div>");
      document.write("<hr>");
      document.write("Marca: ", this.marca, "<br>");
      document.write("Color: ", this.color, "<br>");
      document.write("Modelo: ", this.modelo, "<br>");
      document.write("Capacidad de la batería: ", this.capacidad_bateria, " mAh<br>");
    }
  }
  
  // Subclase Celular
  class Celular extends Dispositivo {
    // constructor
    constructor(marca, color, modelo, numero_serie) {
      super(marca, color, modelo); 
      this.numero_serie = numero_serie;
      this.bateria = parseInt(prompt("Porcentaje de batería disponible (%):")); 
    }
  
    // método para encender el dispositivo
    encender() {
      document.write("<hr>");
      
  
      if (this.bateria > 0) {
        document.write(`<div class='alert alert-success' role='alert'>El celular ${this.marca}, modelo ${this.modelo}, con número de serie ${this.numero_serie} enciende!!</div>`);
      } else {
        document.write(`<div class='alert alert-danger' role='alert'>El celular ${this.marca}, modelo ${this.modelo}, con número de serie ${this.numero_serie} no enciende!!</div>`);
      }
    }
  }
  
  // instanciando la subclase Celular
  let objeto_celular = new Celular('Samsung', 'Negro', 'Galaxy S21', 'SN123456789'); 
  objeto_celular.registrar(); 
  objeto_celular.encender(); 
  