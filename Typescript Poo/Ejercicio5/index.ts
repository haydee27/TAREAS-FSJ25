/**
 * EJERCICIO 5. Crear una clase abstracta Persona y va contener lo siguiente:
Atributos: nombre, apellido, dirección, teléfono y edad.
Métodos:
• Crear un método constructor para recibir los datos.
• Crea un método que en base a la edad imprima un mensaje si es mayor de edad o no.
• Crea un método para mostrar todos los datos personales (será el método abstracto).
• Crea una clase extra llamada Empleado y va contener un atributo llamado sueldo.
• En la clase Empleado añade los métodos cargar sueldo e imprimir sueldo.
• La clase Empleado va heredar de la clase Persona.
• Define un objeto de la clase Empleado y que se imprima los datos del empleado y su sueldo.
 */

abstract class Persona{
    nombre: string;
    apellido:string;
    direccion:string;
    telefono:number;
    edad:number;

    constructor(nombre:string, apellido:string, direccion:string, telefono:number, edad:number){
        this.nombre = nombre;
        this.apellido= apellido;
        this.direccion= direccion;
        this.telefono = telefono;
        this.edad = edad;
    }

    MayorEdad():void{
        if(this.edad>=18){
            console.log("Usted es mayor de edad");
        }else{
            console.log("Usted es menor de edad")
        }
    }

    abstract MostrarDatos():void;
}

class Empleado extends Persona {

    sueldo:number;

    //constructor para que herede los atributos de la clase persona 
    constructor(nombre:string, apellido:string, direccion:string, telefono:number, edad:number){
        super(nombre, apellido, direccion, telefono, edad)
    }
    MostrarDatos(): void {
        console.log("Nombre: " + this.nombre + " " + this.apellido);
        console.log("Direccion: " + this.direccion);
        console.log("Telefono: " + this.telefono);
        console.log("Edad: " + this.edad);
    }

    sueldoEmpleado(sueldoEmpleado:number){
        this.sueldo = sueldoEmpleado;
    }

    ImprimirSueldo(){
        console.log("Su sueldo es de $" + this.sueldo);
    }

}

let empleados = new Empleado("Haydee", "Bonilla", "El Salvador, La paz", 76628142, 15);

empleados.MostrarDatos();
empleados.MayorEdad();
empleados.sueldoEmpleado(6000); 
empleados.ImprimirSueldo();
