
export class PersonaAdapter {

  id: number;
  clave: any;
  name: string;
  surname: string;
  mothersuname: string;
  sex: string;
  cel: string;
  email: string;
  degree: string;
  typeUser: any;
  address: any;

  constructor(data:any) {
    
    this.clave= Number(data.clave);
    this.name = data.name;
    this.surname= data.surname;
    this.mothersuname = data.mothersuname;
    this.sex= data.sex;
    this.cel = data.cel;
    this.email= data.email;
    this.degree = data.degree;
    this.typeUser = {
      code: data.typeUser
    };
    this.address = {
      postalCode: data.postalCode,
      delegation: data.delegation,
      colony: data.colony,
      street: data.street
    };
  }
}