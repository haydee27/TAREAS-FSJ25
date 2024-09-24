/**
 * EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos:
• Crear un constructor que reciba como parámetros el título y género de la canción.
• Utiliza los métodos get y set para recibir e imprimir la propiedad autor.
• Crea un método para mostrar los datos de la canción.
 */

class Cancion{
    titulo:string;
    genero:string;
    private autor:string;

    constructor(titulo:string, genero:string){
        this.titulo = titulo;
        this.genero = genero;
    }

    getAutor(){
        return this.autor;
    }

    setAutor(autor:string){
        this.autor = autor;
    }

    imprimir():void{
        console.log(" Titulo: " + this.titulo);
        console.log(" Genero" + this.genero);
    }
}

let informacionCancion = new Cancion("Permission To Dance", "K-pop");

informacionCancion.setAutor("BTS");
 informacionCancion.imprimir();
 console.log(" Autor: " +informacionCancion.getAutor());
