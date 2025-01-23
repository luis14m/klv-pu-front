import { Elemento } from "./elemento";

export class Actividad {

    idActividad: number;
    codigo: string;
    nombre: string;
    unidad: string;
    cantidad: number;
    precioUnitario: number;
    precioTotal: number;
    elementos: Elemento[];
    
    constructor(){
        this.precioTotal=this.cantidad*this.precioUnitario;
    }

}
 