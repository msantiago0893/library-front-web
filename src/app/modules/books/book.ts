export class Book {
    id: number;
    name: String;
    editorial: String;
    author: String;
    gender: String;
    nPage: any;
    yearEdicion: String;

    constructor(data:any) {

        this.id = data.id ? data.id : 'V';
        this.name= data.name ? data.name : "No hay dato";
        this.editorial= data.editorial ? data.editorial : "No hay dato";
        this.author= data.autor ? data.author : "No hay dato";
        this.gender= data.gender ? data.gender : "No hay dato";
        this.nPage= data.nPage ? data.nPage : "No hay dato";
        //this.nPagina= parseInt(data.nPagina);
        this.yearEdicion= data.yearEdicion ? data.yearEdicion : "No hay  dato";
    
    }
}