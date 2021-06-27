import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { MESSAGE, TYPE_ALERT } from '@constant/catalog-alert';
import { BookService } from '@services/book.service';
import { Alert } from '@utils/alerts';
import { DetailBookComponent } from '../detail-book/detail-book.component';
import { CATALOGBOOK } from './domain/catalog-book';

@Component({
  selector: 'app-books-all',
  templateUrl: './books-all.component.html',
  styleUrls: ['./books-all.component.sass']
})
export class BooksAllComponent implements OnInit {

  public data = [];
  catalog = CATALOGBOOK;
  block = CATALOGBOOK.TABLE_BOOK;
  bookToEdit :any;


  constructor(
    private _service: BookService,
    public router: Router,
    public dialog: MatDialog
    ) {}

  info: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'editorial', 'author', 'gender', 'page', 'actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {

    this.allBooks();

    this.dataSource.paginator = this.paginator;
  }

  allBooks() {
    this._service.consultAll()
                 .subscribe((item: any) => {
                    this.dataSource.data = item
                  });
  }

  delete(item:any) {

    Alert.questions(MESSAGE.QUESTION)
      .then((response:any) => {

        if(response.value) {

          this._service.delete(item.id)
                       .subscribe(() => {
                          this.allBooks();
                          Alert.msgTimer(TYPE_ALERT.SUCCESS, MESSAGE.DONE)
                       });
        }
    });
  }

  return(back:number) {

    this.block = back;
  }

  update(item: any) {

    this.block = this.catalog.UPDATE_BOOK;
    this.bookToEdit = item;
  }

  detail(detail: Object) {

    this.dialog.open(DetailBookComponent, {
      width: "400px",
      data: {...detail}
    });

    // dialoRef.afterClosed().subscribe(result => {
    //   console.log(result);
    // });
  }

}
