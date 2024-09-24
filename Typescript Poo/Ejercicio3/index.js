/**
 * EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción.
 */
var Cancion = /** @class */ (function () {
    function Cancion(titulo, genero) {
        this.titulo = titulo;
        this.genero = genero;
    }
    Cancion.prototype.getAutor = function () {
        return this.autor;
    };
    Cancion.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Cancion.prototype.imprimir = function () {
        console.log(" Titulo: " + this.titulo);
        console.log(" Genero" + this.genero);
    };
    return Cancion;
}());
var informacionCancion = new Cancion("Permission To Dance", "K-pop");
informacionCancion.setAutor("BTS");
informacionCancion.imprimir();
console.log(" Autor: " + informacionCancion.getAutor());
