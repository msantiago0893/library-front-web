export interface StudentsResponse {
    id:number,
    clave: any,
    name: string,
    surname: string,
    mothersurname: string,
    sex: string,
    cel: any,
    email:any,
    degree: string,
    typeUser: TypeUser,
    address: Address
  }

  interface TypeUser {
    idType: any,
    type: string
  }
  interface Address {
    id: any,
    postalCode: string,
    delegation: string,
    colony: string,
    street: string
  }