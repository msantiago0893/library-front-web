import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { BooksService } from 'src/app/shared/services/books.service';
import { Router } from '@angular/router';
import { Book } from './domain/book';
import { Alert } from '@utils/alerts';

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

  displayedColumns: string[] = ['id', 'name', 'editorial', 'author', 'genero', 'edicion','edit','delete'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {

    this.allBooks();    
    this.dataSource.paginator = this.paginator;
  }

  allBooks() {
    this._service.consultBooks()
                 .subscribe(item => {
                    this.dataSource.data = item.map(item => new Book(item))
                  });
  }

  delete(id:any) { 
    this._service.delete(id)
                 .subscribe(()=>{
                   this.allBooks();
                 });
  }

}
