export class Book {
  id: number;
  nombre: String;
  editorial: String;
  autor: String;
  genero: String;
  nPagina: String;
  yearEdicion: String;

  constructor(data:any) {
    console.log("verificar", data);
    this.id = data.id;
    
                  
    this.nombre = data.nombre || '';
 
    this.editorial = data.editorial || '';
    this.autor = data.autor  ? data.autor : 'no se hayo autor';  
    this.genero = data.genero || '';
    this.nPagina = data.nPagina;
    this.yearEdicion = data.yearEdicion;
  }
}