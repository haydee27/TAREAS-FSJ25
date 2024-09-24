
/**
 * EJERCICIO 4. Crea una clase llamada Cuenta y va contener lo siguiente:
 * Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
Métodos:
• Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y
número de cuenta.
• Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una
condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a
depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado
correctamente y la cantidad depositada.
• Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes
que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y
cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que
si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
• Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta.
• Define un objeto de la clase Cuenta y llama sus métodos.
 */
class Cuenta{

    nombre:string;
    cantidad:number;
    tipoCuenta:string;
    numeroCuenta:string;

    constructor(nombre:string, cantidad:number, tipoCuenta:string, numeroCuenta:string){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }

    depositar():void{
        if(this.cantidad<5.00){
            console.log("El valor a depositar debe ser mayor a $5.00")
        }else{
            console.log("Ha depositado correctamente: $" + this.cantidad)
        }
    }

    retirar(valor:number):void{
        if(valor>this.cantidad){
            console.log("Sueldo insuficiente, no se puede realizar la operacion");
        }else if (valor < 5.00) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        }else{
        this.cantidad = this.cantidad-valor;
        console.log("Su retiro es de: " + valor + "Ha sido efetuado exitosamente");
        console.log("Su saldo es de: " + this.cantidad)
        }
    }

    mostrarDatos():void{
        console.log("Nombre: " + this.nombre);
        console.log("Tipo de cuenta: " + this.tipoCuenta);
        console.log("Numero de cuenta: " + this.numeroCuenta);
    }
}

let cuentas = new Cuenta("Haydee Bonilla", 100.00 ,"Ahorro-Corriente", "4689643553");
cuentas.mostrarDatos();
cuentas.depositar();
cuentas.retirar(3.00);