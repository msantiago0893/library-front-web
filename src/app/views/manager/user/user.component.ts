import { Component, OnInit } from '@angular/core';
import { UserAccount} from '@services/account.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './domain/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass']
})
export class UserComponent implements OnInit  {


  users : any = [];
  constructor(

    private _service: UserAccount,
    private userGorup: FormBuilder

    ) {
  }

  ngOnInit() {

    this.allAdmin();
    console.log("esto es la varaible arreglo",this.users);
    
  }

  allAdmin() {
    this._service.consultAll().subscribe(item => {
      this.users = item.filter((elemento:any) => elemento.role === "MANAGER")
                          .map(user => new User(user))
    });
  }



}
