/**EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
• Sumar
• Restar
• Multiplicar
• Dividir
• Potencia
• Factorial
 */
class Calculadora {

    suma(num1: number, num2: number): number {
      return num1 + num2;
    }
  
    resta(num1: number, num2: number): number {
      return num1 - num2;
    }
  
    multiplica(num1: number, num2: number): number {
      return num1 * num2;
    }
  
    dividir(num1: number, num2: number): number {
      return num1/ num2;
    }
  
    potencia(numBase: number, numExpo: number): number {
      let resultado = 1;
      for (let i = 0; i < numExpo; i++) {
        resultado *= numBase;
      }
      return resultado;
    }
  
    factorial(num1: number): number {
      if (num1 === 0 || num1 === 1) {
        return 1;
      }
      return num1 * this.factorial(num1 - 1);
    }
  }

let calculadora = new Calculadora();

console.log("Suma: "+ calculadora.suma(12, 34));
console.log("Resta: "+ calculadora.resta(65, 24));
console.log("Multiplicacion: "+ calculadora.multiplica(15, 6)); 
console.log("Division: "+ calculadora.dividir(50,5));
console.log("Potencia: "+ calculadora.potencia(2, 3)); 
console.log("Factorial:  "+ calculadora.factorial(5));

