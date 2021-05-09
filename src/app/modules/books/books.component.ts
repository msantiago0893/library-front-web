import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BooksService } from 'src/app/shared/services/books.service';
import * as Regex from '@utils/regex';
import { Alert } from "@utils/alerts";
import { MESSAGE } from '@utils/catalog-alert';
import { TYPE_ALERT } from '@utils/catalog-alert';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.sass']
})
export class BooksComponent implements OnInit {

  bookForm : FormGroup;
  private alert: Alert = new Alert();
  id: number

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private _service: BooksService,
    private route: ActivatedRoute
    ){
      this.route.paramMap.subscribe((params:ParamMap)=> [
        this.id = +params.get('id')
      ]);
    }

  ngOnInit() {
    this.validators();
    this.loadItemById();
  }

  loadItemById() {
    if (this.id) {
      this._service.consultById(this.id).subscribe( item => {
        this.bookForm.patchValue(item);
      });
    }
  }

  save() {
    if (this.id) {

      this._service.update(this.id, this.bookForm.value).subscribe(
        response => {
          Alert.msgTimer(TYPE_ALERT.SUCCESS,MESSAGE.MODIFY)
          this.reset();
      },
      error => {
        Alert.msgTimer(TYPE_ALERT.WARNING, MESSAGE.FAILED);
      });


    } else {

      this._service.create(this.bookForm.value).subscribe(
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
