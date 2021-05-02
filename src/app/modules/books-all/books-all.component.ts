import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { BooksService } from 'src/app/shared/services/books.service';
import { Router } from '@angular/router';
import { Alert } from '@utils/alerts';
import { MESSAGE, TYPE_ALERT  } from '@utils/catalog';

@Component({
  selector: 'app-books-all',
  templateUrl: './books-all.component.html',
  styleUrls: ['./books-all.component.sass']
})
export class AllBooksComponent implements OnInit {

  public data = [];
  private alert: Alert = new Alert();

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

    this.alert.questions(MESSAGE.QUESTION)
    .then((resdponse) => {

      if (resdponse.value) {
        this._service.delete(elemento.id)
                        .subscribe(()=>{
                          this.allBooks();
                          this.alert.msgTimer(TYPE_ALERT.SUCCESS)
                      });
      }     

    });
     
  }

  update(elemento: any) {
    this.router.navigate(['home/edit-book/',elemento.id]);
  }
}
