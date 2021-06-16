import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from './domain/user';
import { UserAccount} from '@services/account.service';
import { CATALOGUSER } from './domain/catalog-user';
import { MESSAGE } from '@constant/catalog-alert';
import { NUMERIC } from '@enums/numeric';
import { Alert } from '@utils/alerts';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit  {

  users : any = [];
  itemToModify: any;
  catalogNumeric = NUMERIC;
  catalog = CATALOGUSER;
  block =  CATALOGUSER.LIST_USER;

  constructor(
    private _service: UserAccount
  ) {}

  ngOnInit() {
    this.allAdmin();
  }

  allAdmin() {

    this._service.consultAll()
      .subscribe(item => {
        this.users = item.filter((item:any) => item.role === "MANAGER")
                         .map(user => new User(user))
      });
  }

  addUser() {
    this.block = this.catalog.ADD_USER;
  }

  edit(element: any) {

    this.block = this.catalog.UPDATE_USER;

    this.itemToModify = element;
  }

  delete(item: any) {

    Alert.questions(MESSAGE.QUESTION)
      .then((response: any) => {
        if(response.value) {
          this._service.delete(item.id).subscribe(()=> {
            this.allAdmin();
          });
        }
      });
  }

  back(block: number) {
    this.block = block;
  }
}