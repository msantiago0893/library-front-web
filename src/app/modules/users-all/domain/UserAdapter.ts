
export class UserAdapter {

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
  postalCode: any;
  delegation: any;
  colony: any;
  street: any;

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
    this.typeUser = data.typeUser ? String(data.typeUser.idType): '',
    
    this.postalCode= data.address && data.address.postalCode || '',
    this.delegation= data.address && data.address.delegation || '',
    this.colony= data.address && data.address.colony || '',
    this.street= data.address && data.address.street || ''
  }
}