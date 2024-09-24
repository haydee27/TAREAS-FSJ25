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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, direccion, telefono, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
        this.edad = edad;
    }
    Persona.prototype.MayorEdad = function () {
        if (this.edad >= 18) {
            console.log("Usted es mayor de edad");
        }
        else {
            console.log("Usted es menor de edad");
        }
    };
    return Persona;
}());
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    //constructor para que herede los atributos de la clase persona 
    function Empleado(nombre, apellido, direccion, telefono, edad) {
        return _super.call(this, nombre, apellido, direccion, telefono, edad) || this;
    }
    Empleado.prototype.MostrarDatos = function () {
        console.log("Nombre: " + this.nombre + " " + this.apellido);
        console.log("Direccion: " + this.direccion);
        console.log("Telefono: " + this.telefono);
        console.log("Edad: " + this.edad);
    };
    Empleado.prototype.sueldoEmpleado = function (sueldoEmpleado) {
        this.sueldo = sueldoEmpleado;
    };
    Empleado.prototype.ImprimirSueldo = function () {
        console.log("Su sueldo es de $" + this.sueldo);
    };
    return Empleado;
}(Persona));
var empleados = new Empleado("Haydee", "Bonilla", "El Salvador, La paz", 76628142, 15);
empleados.MostrarDatos();
empleados.MayorEdad();
empleados.sueldoEmpleado(6000);
empleados.ImprimirSueldo();
