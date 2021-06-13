export class User {
    id: Number;
    name: string;
    firstname: string;
    secondname: string;
    sex: string;
    cel: string;
    email: string;
    role: string;
    addres: any;

    constructor(data:any) {
        this.id = data.id;
        this.name = data.name || '';
        this.firstname = data.firstname || '';
        this.secondname = data.secondname || '';
        this.sex = data.sex;
        this.cel = data.cel;
        this.email = data.email;
        this.role = data.role;
        this.addres = data.addres;

    }

}