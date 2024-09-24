//EJERCICIO 1:
// Crear una función que en base a la edad que ingreso el usuario devolver un
//mensaje si la persona es mayor de edad o no. Utilizar para la condición el operador ternario.

function edad(edad){
    edad>=18? console.log("****USTED ES MAYOR DE EDAD :)****") : console.log("----USTES ES MENOR DE EDAD :(----")
}

edad(67);

//EJERCICIO 2: Crear una función que determine la nota final 
//de un alumno, la cual depende de lo siguiente:
//• Examen =20%   • tareas = 40%
//• asistencia = 10%    • investigación = 30%
//Al final deberá mostrar los datos del alumno, nombre, carnet y nota final

function DatosEstudiante(){
    console.log("|||||||||Datos de Estudiantes||||||||||||");
    console.log("Nombre: Haydee Bonilla");
    console.log("Carnet: 17-33-99");
}

function NotaFinal(examen, tareas, asistencia, investigación){

    let notas = ((examen*0.2)+(tareas*0.4)+(asistencia*0.1)+(investigación*0.3));
    return notas;

}

DatosEstudiante();
let NotaF = NotaFinal(8,10,10,10);
console.log("Nota Final: " + NotaF);



//Ejercicio 3
//Calcular el aumento de trabajador tomando en cuenta la tabla de categorías de aumento.
//Para este ejercicio deberá de asignar las siguientes variables: nombre, salario, categoría y
//aumento. Deberá demostrar los datos del empleado y el aumento salarial.

//CATEGORIA AUMENTO
//A 15%
//B 30%
//C 10%
//D 20%

let nombre="Haydee";
let salario = 200.00;
let categoria ="A"; 
let aumentoSalarial;

switch(categoria){
    case "A":
        aumentoSalarial = salario * 0.15;
    break;
    case "B":
        aumentoSalarial = salario * 0.3;
    break;
    case "C":
        aumentoSalarial = salario * 0.1;
    break;
    case "D":
        aumentoSalarial = salario * 0.2;
    break;
    default:
        console.log("Categoria Invalida");
    break;
}

let salarioTotal = salario + aumentoSalarial;

function DatosEmpleado(){
console.log("Nombre de empleado: " + nombre);
console.log("Salario base de empleado : $ " + salario);
console.log("Categoria del empleado: " + categoria);
console.log("Aumento salarial: $ "+aumentoSalarial);
console.log("El salario total del empleado es: $" + salarioTotal);
}
DatosEmpleado();


//EJERCICIO 4: Crear una función que en base a 2 números enteros que ingrese el usuario,
//calcular cual número es el mayor y devolverlo.

function numeroMayor(numero1, numero2){
    if(numero1>numero2){
        console.log("El numero mayor es: " + numero1);
    }else{
        console.log("El numero mayores: "+ numero2);
    }
}

numeroMayor(1,3);





/*
EJERCICIO 6: Crear una Función para calcular el descuento en viajes turísticos tomando
en cuenta lo siguiente:
Si el usuario introduce como origen la ciudad de Palma y como destino La costa del Sol, el
descuento será de 5%, si el destino es Panchimalco el descuento será del 10% y si el destino
es Puerto el Triunfo el descuento será del 15%.

*/
let descuent;
function calcularDescuento(cuidad,destino, precio){
    if(cuidad =="palma"){

        if(destino =="la costa del sol"){
            descuent=precio*0.05;
            console.log("Su descuento es de 5%");
        }else if(destino=="panchimalco"){
            descuent = precio * 0.1;
            console.log("Su descuento es de 10%");
        }else if(destino =="puerto el triunfo"){
            descuent = precio*0.15;
            console.log("Su descuento es de 15%");
        }

    }else{
        console.log("No tiene descuento");
    }

    return precio-descuent;

}

//let descuentoViaje = calcularDescuento("palma", "puerto el triunfo", 20.00);
//let descuentoViaje = calcularDescuento("San Luis", "panchimalco", 20.00);
let descuentoViaje = calcularDescuento("palma", "la costa del sol", 20.00);
console.log(descuentoViaje);

/**
 * EJERCICIO 7
 * Se realiza la carga de 10 valores enteros por teclado. Se desea conocer:
• La cantidad de valores negativos ingresados.
• La cantidad de valores positivos ingresados.
• La cantidad de múltiplos de 15.
• El valor acumulado de los números ingresados que son pares.
 */

let valores = [-2,33,4,2,-7,55,3,2,-90,34];
console.log(valores);


/**
 * EJERCICIO 8:
Escriba un programa que muestre la tabla de multiplicar del 1 al 10 del número ingresado
por el usuario.
 */

function tablaMultiplicar(tabla){

    for(let i=1; i<=10; i++){
       console.log(tabla + "x" + i + "=" + tabla * i);
    }
}
tablaMultiplicar(5);








