import { Component, Input, OnInit } from '@angular/core';
import { UserAccount} from '@services/account.service';
import { FormBuilder } from '@angular/forms';
import { User } from './domain/user';
import { NUMERIC } from '@enums/numeric';
import { CATALOGUSER } from './domain/catalog-user';
import { Alert } from '@utils/alerts';
import { MESSAGE } from '@constant/catalog-alert';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit  {

  catalogNumeric = NUMERIC;
  catalog = CATALOGUSER;
  block =  CATALOGUSER.LIST_USER;
  users : any = [];
  itemToModify: any;

  constructor(
    private _service: UserAccount,
    private userGorup: FormBuilder

    ) {
  }

  ngOnInit() {

    this.allAdmin();

  }

  back(num:number) {
    this.block = num

  }

  addUser() {
    this.block = this.catalog.ADD_USER;

  }

  edit(element:any) {
    this.block = this.catalog.UPDATE_USER;
    this.itemToModify = element
  }

  update(retry:Boolean) {
      if (retry){
        this.allAdmin();
      }
  }


  allAdmin() {
    this._service.consultAll().subscribe(item => {
      this.users = item.filter((elemento:any) => elemento.role === "MANAGER")
                          .map(user => new User(user))
    });
  }

delete(elemento:any) {
      Alert.questions(MESSAGE.QUESTION).then((response) => {

        if(response.value) {
         this._service.delete(elemento.id)
         .subscribe(()=> {
          this.allAdmin();
       });
    }});
}



}

