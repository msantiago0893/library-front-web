import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { BooksService } from 'src/app/shared/services/books.service';
import { Router } from '@angular/router';
import { Book } from '../books/domain/book';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.sass']
})
export class AllBooksComponent implements OnInit {

  public data = [];
  public book: Book = new Book();

  constructor(
    private _service: BooksService,
    public router: Router
    ) {}

  info: any[] = [];

  displayedColumns: string[] = ['id', 'name', 'editorial', 'author', 'genero', 'edicion','edit','delete'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {

    this.dataSource.paginator = this.paginator;

    this._service.allBooks().subscribe(item => {
      // console.log('Item ', item);
      this.dataSource.data = item
    });
  }
  update(book: any) {
    console.log('Objeto a editar ', book);
    this.book = book;
    this.router.navigate(['/home/add-book']);
  }
  delete(book: any) {
    this._service.delete(book.id).subscribe();
  }
}
