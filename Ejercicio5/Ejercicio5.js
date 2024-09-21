
/*
EJERCICIO 5: Realizar una función para una tienda de coches en donde se deberá calcular:
Si el coche a la venta es un FORD FIESTA, aplicar un 5% de descuento en la compra. Si el
coche a la venta es un FORD FOCUS, el descuento será del 10% y si es un FORD ESCAPE
el descuento será del 20%. Mostrar en html el coche seleccionado y el descuento que se
aplicara en base a lo que selecciono el usuario.
*/

//Agarrar el elemento del html
let elemento = document.getElementById("TipoFord");

function coches(precioCompra, marca){
    let descuento=0;

    if(marca ==="FORD FIESTA"){
        descuento=precioCompra*0.05;

    }else if(marca ==="FORD FOCUS"){
        descuento= precioCompra*0.1;

    }else if( marca ==="FORD ESCAPE"){
        descuento= precioCompra*0.2;
    }
    return `El coche seleccionado es un ${marca} y el descuento aplicado es de ${descuento}`;
}
const resultado = coches(2000, "FORD ESCAPE");
elemento.innerText = resultado;


/**
 * Se cuenta con la siguiente información:
 * 
• Las edades de 5 estudiantes del turno mañana.
• Las edades de 6 estudiantes del turno tarde.
• Las edades de 11 estudiantes del turno noche.


Nota: Las edades de cada estudiante se deberán ingresar por la web.


Lo que queremos devolver:
• Obtener el promedio de las edades de cada turno (tres promedios).
• Imprimir dichos promedios (promedio de cada turno).


• Mostrar por pantalla un mensaje que indique cuál de los tres turnos tiene un
promedio de edades mayor.
 * 
 * 
 * 
 */

function CalcularPromedios(){

    let sumaM = 0; //guardaran cada una de las variables -- Acumulando las edades para el promedio final
    let sumaT= 0;
    let sumaN=0;

    for (let i = 1; i <= 5; i++) { //usamos una estructura repetitiva para pedir las edades de las clases
        let edad = parseInt(prompt('Edad de estudiante del turno mañana (estudiante ' + i + '):'));
        sumaM += edad;
    }

    for (let j = 1; j <= 6; j++) {
        let edad = parseInt(prompt('Edad de estudiante del turno tarde (estudiante ' + j + '):'));
        sumaT +=edad;
    }

    for (let k = 1; k <= 11; k++) {
        let edad = parseInt(prompt('Edad de estudiante del turno noche (estudiante ' + k + '):'));
        sumaN += edad;
    }

    //Operacion para determinar el promedio de cada clase 
    let promedioM = sumaM / 5;
    let promedioT = sumaT / 6;
    let promedioN = sumaN / 11;

//El metodo toFidex() nos ayuda a que el promedio quede con dos decimales
    let mensaje = `Promedio de edades del turno mañana: ${promedioM.toFixed(2)}<br>
                           Promedio de edades del turno tarde: ${promedioT.toFixed(2)}<br>
                           Promedio de edades del turno noche: ${promedioN.toFixed(2)}<br><br>`;

            // Estructura para determinar cual es el mejor promedio (el += es como "mensaje = mensaje + "Hola";)
            if (promedioM > promedioT && promedioM > promedioN) {
                mensaje += "El turno mañana tiene el promedio de edades más alto.";
            } else if (promedioT> promedioM && promedioT > promedioN) {
                mensaje += "El turno tarde tiene el promedio de edades más alto.";
            } else if (promedioN > promedioM && promedioN > promedioT) {
                mensaje += "El turno noche tiene el promedio de edades más alto.";
            } else {
                mensaje += "Hay un empate en los promedios de edades.";
            }

        
            //alert(mensaje); //Puede mostrarnos el mensaje 
            
            // Se muestra en pantalla los resultados a travez del id de la etiqueta en el html
            document.getElementById('resultado').innerHTML = mensaje;

}