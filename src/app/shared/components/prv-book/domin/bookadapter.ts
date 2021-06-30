import { formatDate } from "@angular/common";

export class Bookadapter {

    name: String;
    editorial: String;
    author: String;
    gender: String;
    page: String;
    yearEdicion: String;
    photo: String;

    constructor(data: any) {

        this.name = data.name || '';
        this.editorial = data.editorial ? data.editorial : '';
        this.author = data.author ? data.author : '';
        this.gender = data.gender ? data.gender : '';
        this.page = data.page ? data.page : '';
        this.yearEdicion = data.yearEdicion ? this.dateFormat(data.yearEdicion) : '';
        this.photo = data.photo ? data.photo : '';
    }

    dateFormat (date : string) {
      return formatDate(date,'yyyy/MM/dd','en-MX');
    }

}