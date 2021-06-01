
export class Persona {
  id: Number;
  dni: string;
  name: string;
  firstname: string;
  secondname: string;
  sex: string;
  cel: string;
  email: string;
  password: String;
  enabled: Boolean;
  role: String;
  address: any;

  constructor(data:any) {
    this.id = data.id;
    this.dni= data.dni;
    this.name = data.name;
    this.firstname= data.firstname;
    this.secondname = data.secondname;
    this.sex= data.sex;
    this.cel = data.cel;
    this.email= data.email;
    this.password = data.password;
    this.enabled = data.enabled;
    this.role = data.role;
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