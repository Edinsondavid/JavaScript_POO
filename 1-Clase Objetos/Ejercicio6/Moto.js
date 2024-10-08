class Moto{
    //Metodo Constructor
    constructor(marca,modelo,color,año,cilindraje){
        this.marca = marca // propiedades para la instancia
        this.modelo = modelo
        this.color = color
        this.año = año
        this.cilindraje = cilindraje



    }

    //metodo para mostrar detalles del objeto
    mostrarDetalles(){
        document.write("<h3>Moto</h3><br>")
        document.write("Marca: "+this.marca+"<br>")
        document.write("modelo: "+this.modelo+"<br>")
        document.write("color: "+this.color+"<br>")
        document.write("año: "+this.año+"<br>")
        document.write("cilindraje: "+this.cilindraje+"<br>")
    }


    //metodo
    encender(){
        document.write(" La Moto " +this.marca + " Esta Encendida")
       
    }

}
//Metodo para instanciar la clase Moto
let moto1 = new Moto("Ducatti", "Panigale v4", "Roja"," 2023 ", "1103 cc")
let moto2 = new Moto("BMW", "R 1250 Adventure", "Gris"," 2022 ", "1254 cc")
let moto3 = new Moto("Yamaha", "Live wire", "Negro"," 2024 ", "Electrica")

//Mostrar los detalles de cada objeto
moto1.mostrarDetalles()
moto1.encender()
moto2.mostrarDetalles()
moto2.encender()
moto3.mostrarDetalles()
moto3.encender()


