import { Component, OnInit,  } from '@angular/core';
import { UserAccount } from '@services/account.service';
import { Alert } from '@utils/alerts';
import { Persona } from './domain/Persona';
import { Router } from '@angular/router';
import { NUMERIC } from '@enums/numeric.enum';
import { MESSAGE } from '@utils/catalog-alert';
import {TYPEALERT} from '@enums/type-alert.enum';
import { CATALOGUSER  } from './domain/CatalogUser'

@Component({
  selector: 'app-users-all',
  templateUrl: './list-admon.html',
  styleUrls: ['./users-all.component.sass']
})
export class StudentsConsultComponent implements OnInit {

  arreglo : any =  [];
  data : [];
  numeric = NUMERIC;
  catalog= CATALOGUSER;
  block : Number = CATALOGUSER.LIST_USER;
  mensaje = "ADIOS "
  user: any;

  private alert: Alert = new Alert();
  mayuscula: String;

  constructor(
    private _service: UserAccount,
    public router: Router
  ) { }

  ngOnInit() {

    this.allAdmin();

  }

  butonRest(vacio) {
    console.log('BOTON DE RETEAR',45654654)

  }


  recibidoNum(num:number,resetea:any) {
    console.log(num)
    this.block = num;
  }

  addUser() {
    this.block = this.catalog.ADD_USER;
  }

  editUser(elemento) {
    this.block = this.catalog.UPDATE_USER;

    console.log('elemento',elemento);
    this.user = elemento;
  }

  regresar() {
    this.block = this.catalog.LIST_USER;
  }

  allAdmin(){
    this._service.consultStudents().subscribe(item => {
      this.arreglo = item.filter((elemento:any) => elemento.role === 'MANAGER')
      .map(user => new Persona (user))
    });
  }

  delete(elemento:any) {
    Alert.questions(MESSAGE.QUESTION)
      .then((response)=> {
        if (response.value) {
          this._service.delete(elemento.id)
            .subscribe(()=> {
                this.allAdmin();
                Alert.msgTimer(TYPEALERT.SUCCESS, MESSAGE.DONE)
            });
        }
      });
  }

  recogerValor(valor:any){
    this.mayuscula = valor;
    console.log("Valor que envio el hijo ", valor);

  }


}