export class Bookadapter {

    name: String;
    editorial: String;
    author: String;
    gender: String;
    page: String;
    yearEdicion: String;

    constructor(data: any) {

        this.name = data.name || '';
        this.editorial = data.editorial ? data.editorial : '';
        this.author = data.author ? data.author : '';
        this.gender = data.gender ? data.gender : '';
        this.page = data.page ? data.page : '';
        this.yearEdicion = data.yearEdicion ? this.dateformat(data.yearEdicion) : '';
    }

    dateformat (date : string) {
        return new Date(date).toLocaleDateString();
    }

}