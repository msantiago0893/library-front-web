import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { MESSAGE, TYPE_ALERT } from '@constant/catalog-alert';
import { BookService } from '@services/book.service';
import { Alert } from '@utils/alerts';

@Component({
  selector: 'app-books-all',
  templateUrl: './books-all.component.html',
  styleUrls: ['./books-all.component.sass']
})
export class BooksAllComponent implements OnInit {

  public data = [];

  constructor(
    private _service: BookService,
    public router: Router
    ) {}

  info: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'editorial', 'author', 'gender', 'nPage','edit','delete'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {

    // this.allBooks();
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
                          Alert.msgTimer(TYPE_ALERT.SUCCESS, MESSAGE.DONE)
                      });
      }

    });
  }

  update(elemento: any) {
    this.router.navigate(['home/edit-book/',elemento.id]);
  }

}
