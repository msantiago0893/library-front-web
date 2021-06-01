import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { BooksService } from 'src/app/shared/services/books.service';
import { Router } from '@angular/router';
import { Alert } from 'src/app/shared/utils/alerts';
import { MESSAGE } from 'src/app/shared/constant/catalog-alert';
import { TYPEALERT } from '@enums/type-alert.enum'

@Component({
  selector: 'app-books-all',
  templateUrl: './books-all.component.html',
  styleUrls: ['./books-all.component.sass']
})
export class AllBooksComponent implements OnInit {

  public data = [];

  constructor(
    private _service: BooksService,
    public router: Router
    ) {}

  info: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'editorial', 'author', 'gender', 'nPage','edit','delete'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {

    this.allBooks();
    this.dataSource.paginator = this.paginator;
  }

  allBooks() {
    this._service.consultAll()
                 .subscribe(item => {
                    this.dataSource.data = item
                  });
  }

  delete(elemento:any) {

    Alert.questions(MESSAGE.QUESTION)
    .then((resdponse) => {

      if (resdponse.value) {
        this._service.delete(elemento.id)
                        .subscribe(()=>{
                          this.allBooks();
                          Alert.msgTimer(TYPEALERT.SUCCESS, MESSAGE.DONE)
                      });
      }

    });
  }

  update(elemento: any) {
    this.router.navigate(['home/edit-book/',elemento.id]);
  }
}
