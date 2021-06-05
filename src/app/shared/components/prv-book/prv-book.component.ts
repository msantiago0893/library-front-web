import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { BookService } from '@services/book.service';

import { MESSAGE, TYPE_ALERT } from '@constant/catalog-alert';
import { Alert } from '@utils/alerts';
import * as Regex from '@constant/regex';

@Component({
  selector: 'app-prv-book',
  templateUrl: './prv-book.component.html',
  styleUrls: ['./prv-book.component.sass']
})
export class PrvBookComponent implements OnInit {

  bookForm : FormGroup;
  private alert: Alert = new Alert();
  id: number

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private _service: BookService,
    private route: ActivatedRoute
    ){
      // this.route.paramMap.subscribe((params:ParamMap)=> [
      //   this.id = +params.get('id')
      // ]);
    }

  ngOnInit() {
    this.validators();
    // this.loadItemById();
  }

  // loadItemById() {
  //   if (this.id) {
  //     this._service.consultById(this.id).subscribe( item => {
  //       this.bookForm.patchValue(item);
  //     });
  //   }
  // }

  save() {
    if (this.id) {

      this._service.update(this.bookForm.value).subscribe(
        response => {
          Alert.msgTimer(TYPE_ALERT.SUCCESS,MESSAGE.MODIFY)
          this.reset();
        },
      error => {
        Alert.msgTimer(TYPE_ALERT.WARNING, MESSAGE.FAILED);
      });


    } else {

      this._service.add(this.bookForm.value).subscribe(
        response => {
          Alert.msgTimer(TYPE_ALERT.SUCCESS, MESSAGE.ADD);
          this.reset();
        },
        error => {
          Alert.msgTimer(TYPE_ALERT.WARNING, MESSAGE.FAILED);
        });
    }
  }

  reset() {
    this.bookForm.reset('');
    Object.keys(this.bookForm.controls).forEach(key => {
      this.bookForm.controls[key].setErrors(null);
    });
    this.bookForm.setErrors({"required":true})
  }

  validators() {
    this.bookForm = this.fb.group({
      name:['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.pattern(Regex.name)
      ]],
      editorial:['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern(Regex.name)
      ]],
      author:['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern(Regex.name)
      ]],
      gender:['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.pattern(Regex.name)
      ]],
      nPage:['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.pattern(Regex.numeric)
      ]],
      yearEdicion:['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(30),
        Validators.pattern(Regex.numeric)
      ]]
    });
  }
}
