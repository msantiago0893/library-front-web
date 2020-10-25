
export class Persona {

  id: number;
  clave: string;
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

    this.id = data.id;
    this.clave= data.clave;
    this.name = data.name;
    this.surname= data.surname;
    this.mothersuname = data.mothersuname;
    this.sex= data.sex;
    this.cel = data.cel;
    this.email= data.email;
    this.degree = data.degree;
    this.typeUser = {
      idType: data.typeUser && data.typeUser.code,
      type: data.typeUser && data.typeUser.description
    };
    this.address = {
      id: data.address && data.address.id || undefined,
      postalCode: data.address && data.address.postalCode || '',
      delegation: data.address && data.address.delegation || '',
      colony: data.address && data.address.colony || '',
      street: data.address && data.address.street || ''
    };
  }
}