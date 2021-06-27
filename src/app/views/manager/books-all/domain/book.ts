export class Book {
  id: number;
  name: String;
  editorial: String;
  author: String;
  gender: String;
  page: String;
  yearEdicion: String;

  constructor(data:any) {
    this.id = data.id;

    this.name = data.name || '';
    this.editorial = data.editorial ? data.editorial : '';
    this.author = data.author  ? data.author : '';
    this.gender = data.gender || '';
    this.page = data.page || '';
    this.yearEdicion = data.yearEdicion ? data.yearEdicion : "Sin fecha";
  }
}