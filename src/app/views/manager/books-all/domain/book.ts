export class Book {
  id: number;
  name: String;
  editorial: String;
  author: String;
  gender: String;
  nPagina: String;
  yearEdicion: String;

  constructor(data:any) {
    // console.log("verificar", data);
    this.id = data.id;

    this.name = data.name || '';
    this.editorial = data.editorial ? data.editorial : '';
    this.author = data.author  ? data.author : '';
    this.gender = data.gender || '';
    this.nPagina = data.nPagina;
    this.yearEdicion = data.yearEdicion ? data.yearEdicion : "Sin fecha";
  }
}