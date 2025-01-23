export class Elemento {

    idElemento: number;
    codigo: string;
    nombre: string;
    unidad: string;
    cantidad: number;
    precioUnitario: number;
    precioTotal: number;

    constructor() {
        this.precioTotal = this.cantidad * this.precioUnitario;
    }
}