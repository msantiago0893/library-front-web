import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';
import { MESSAGE, TYPE_ALERT } from '@constant/catalog-alert';
import { BookService } from '@services/book.service';
import { Alert } from '@utils/alerts';
import { DetailBookComponent } from '../detail-book/detail-book.component';

@Component({
  selector: 'app-books-all',
  templateUrl: './books-all.component.html',
  styleUrls: ['./books-all.component.sass']
})
export class BooksAllComponent implements OnInit {

  public data = [];

  constructor(
    private _service: BookService,
    public router: Router,
    public dialog: MatDialog
    ) {}

  info: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'editorial', 'author', 'gender', 'nPage', 'actions'];
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

  update(item: any) {

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
