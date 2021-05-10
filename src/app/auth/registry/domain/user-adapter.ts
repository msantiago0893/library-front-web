
export class UserAdapter {

  dni: string;
  name: string;
  firstname: string;
  secondname: string;
  sex: string;
  cel: string;
  email: string;
  password: String;
  enabled: Boolean;
  address: any;

  constructor(data:any) {

    this.dni= data.dni;
    this.name = data.name;
    this.firstname= data.surname;
    this.secondname = data.mothersuname;
    this.sex= data.sex;
    this.cel = data.cel;
    this.email= data.email;
    this.password = data.password;
    this.enabled = data.enabled;
    this.address = {
      postalCode: data.postalCode,
      city: data.postalCode,
      delegation: data.delegation,
      colony: data.colony,
      street: data.street,
      numInt: data.numInt,
      numExt: data.numExt
    };
  }
}