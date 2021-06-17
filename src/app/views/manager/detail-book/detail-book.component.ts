import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.sass']
})
export class DetailBookComponent implements OnInit {

  books: null;

  constructor(
    public dialogRef: MatDialogRef<DetailBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.books = data;
  }

  ngOnInit() {
  }

}
