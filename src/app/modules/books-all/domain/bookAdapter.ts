export class bookAdapter {
    id: number;
    nombre: String;
    editorial: String;
    autor: String;
    genero: String;
    nPagina: any;
    yearEdicion: String;

    constructor(data:any) {

        this.nombre= data.name;
        this.editorial= data.editorial;
        this.autor= data.autor ? data.autor : " NO tiene valor";
        this.genero= data.genero;
        this.nPagina= parseInt(data.nPagina);
        //this.nPagina= parseInt(data.nPagina);
        this.yearEdicion= data.yearEdicion;
    
    }
}