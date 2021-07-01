import { Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { BookService } from '@services/book.service';

import * as Regex from '@constant/regex';
import { Bookadapter } from './domin/bookadapter';
import * as Date from '@constant/date';
import { Alert } from '@utils/alerts';
import { MESSAGE, TYPE_ALERT } from '@constant/catalog-alert';

@Component({
  selector: 'app-prv-book',
  templateUrl: './prv-book.component.html',
  styleUrls: ['./prv-book.component.sass'],
})
export class PrvBookComponent implements OnInit {

  bookForm : FormGroup;
  maxDate = Date.previousDate();
  @Input()  book : any;
  @Input() updateTable : Function;
  @Output() back = new EventEmitter<Number>();

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private _service: BookService
    ){ }

  ngOnInit() {
    this.validators();

    if (this.book) {
      this.bookForm.patchValue(this.book);
    }
  }

  // async / await => espera a que se termine de ejecutar el promise
  async save(prvFile: any) {

    let promfile = await prvFile.save();

    this.bookForm.patchValue({photo: promfile});

    if (this.book) {

      this._service.update(this.book.id, new Bookadapter(this.bookForm.value))
        .subscribe(() => {
          Alert.msgTimer(TYPE_ALERT.SUCCESS,MESSAGE.MODIFY);
          this.updateTable();
          this.goBack();
        },
      );

    } else {

      this._service.add(new Bookadapter(this.bookForm.value))
        .subscribe(
          () => {
          Alert.msgTimer(TYPE_ALERT.SUCCESS, MESSAGE.ADD);
          this.reset();
          }
        );
    }
  }

  goBack() {
    this.back.emit(1);
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
      page:['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10),
        Validators.pattern(Regex.numeric)
      ]],
      yearEdicion:['', [
        Validators.required
      ]],
      photo: ['']
    });
  }
}
