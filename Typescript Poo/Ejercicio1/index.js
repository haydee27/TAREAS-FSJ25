var CabeceraPagina = /** @class */ (function () {
    function CabeceraPagina() {
    }
    //Metodos
    CabeceraPagina.prototype.obtenerAtributo = function (titulo, color, fuente) {
        this.titulo = titulo;
        this.color = color;
        this.fuente = fuente;
    };
    CabeceraPagina.prototype.Alineacion = function (nuevaAlineacion) {
        this.alineacionT = nuevaAlineacion;
    };
    CabeceraPagina.prototype.imprimirPropiedades = function () {
        console.log("Título: " + this.titulo);
        console.log("Color: " + this.color);
        console.log("Fuente: " + this.fuente);
        console.log("Alineacion: " + this.alineacionT);
    };
    return CabeceraPagina;
}());
// creando instancia
var cabecera = new CabeceraPagina();
cabecera.obtenerAtributo("Ejercicio1", "Negro", "Arial");
cabecera.Alineacion("centrado");
cabecera.imprimirPropiedades();
