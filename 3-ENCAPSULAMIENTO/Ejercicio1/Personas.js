class Personas {
  constructor(nombres, apellidos, identidad, fechanacimiento, sexo) {
      this._nombres = nombres;       // Atributo privado
      this._apellidos = apellidos;   // Atributo privado
      this._identidad = identidad;   // Atributo privado
      this.fechanacimiento = fechanacimiento; // Atributo público
      this.sexo = sexo;               // Atributo público
  }

  // Getters
  obtenerNombres() {
      return this._nombres;
  }

  obtenerApellidos() {
      return this._apellidos;
  }

  obtenerIdentidad() {
      return this._identidad;
  }

  // Setters
  establecerNombres(nombres) {
      this._nombres = nombres;
  }

  establecerApellidos(apellidos) {
      this._apellidos = apellidos;
  }

  mostrarDetalles() {
      document.write(`Nombres: ${this._nombres}<br>`);
      document.write(`Apellidos: ${this._apellidos}<br>`);
      document.write(`Nº Identidad: ${this._identidad}<br>`);
      document.write(`Fecha nacimiento: ${this.fechanacimiento}<br>`);
      document.write(`Sexo: ${this.sexo}<br>`);
  }
}

// Objeto de la clase Persona
const persona = new Personas("Alejandro", "Siolo", 1102345678, "14/09/2000", "M");

// Imprimir atributos públicos y privados
persona.mostrarDetalles();

document.write("<hr>");

// Modificar atributos encapsulados usando setters y obtenerlos con getters
persona.establecerNombres("Edinson"); // Setter
document.write(`Nombres: ${persona.obtenerNombres()}<br>`); // Getter
persona.establecerApellidos("Berrio"); // Setter
document.write(`Apellidos: ${persona.obtenerApellidos()}<br>`); // Getter
document.write(`Nº Identidad: ${persona.obtenerIdentidad()}<br>`); // Getter
document.write(`Fecha nacimiento: ${persona.fechanacimiento}<br>`); // Público
document.write(`Sexo: ${persona.sexo}<br>`); // Público
