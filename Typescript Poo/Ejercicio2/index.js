var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.suma = function (num1, num2) {
        return num1 + num2;
    };
    Calculadora.prototype.resta = function (num1, num2) {
        return num1 - num2;
    };
    Calculadora.prototype.multiplica = function (num1, num2) {
        return num1 * num2;
    };
    Calculadora.prototype.dividir = function (num1, num2) {
        return num1 / num2;
    };
    Calculadora.prototype.potencia = function (numBase, numExpo) {
        var resultado = 1;
        for (var i = 0; i < numExpo; i++) {
            resultado *= numBase;
        }
        return resultado;
    };
    Calculadora.prototype.factorial = function (num1) {
        if (num1 === 0 || num1 === 1) {
            return 1;
        }
        return num1 * this.factorial(num1 - 1);
    };
    return Calculadora;
}());
var calculadora = new Calculadora();
console.log("Suma: " + calculadora.suma(12, 34));
console.log("Resta: " + calculadora.resta(65, 24));
console.log("Multiplicacion: " + calculadora.multiplica(15, 6));
console.log("Division: " + calculadora.dividir(50, 5));
console.log("Potencia: " + calculadora.potencia(2, 3));
console.log("Factorial:  " + calculadora.factorial(5));
