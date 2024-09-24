class CabeceraPagina{
    //EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que
    //obtenga el título, color y fuente de la página,....
    // el segundo método que indique como desea que
    //aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las
    //propiedades.

  titulo: string;
  color: string;
  fuente: string;
  alineacionT: string;

    //Metodos
    
    obtenerAtributo(titulo: string, color: string, fuente: string):void{
      this.titulo= titulo;
      this.color=color;
      this.fuente=fuente;
    }

    Alineacion(nuevaAlineacion: 'izquierda' | 'centrado' | 'derecha'): void {
        this.alineacionT = nuevaAlineacion;
    }
   
    imprimirPropiedades(): void {
      console.log("Título: " + this.titulo);
      console.log("Color: "  + this.color);
      console.log("Fuente: " + this.fuente);
      console.log("Alineacion: " + this.alineacionT);
    }

}

// creando instancia
const cabecera:CabeceraPagina = new CabeceraPagina();
cabecera.obtenerAtributo("Ejercicio1", "Negro", "Arial");
cabecera.Alineacion("centrado");
cabecera.imprimirPropiedades();

