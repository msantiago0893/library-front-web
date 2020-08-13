import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { BooksService } from 'src/app/shared/services/books.service';
import { BookResponse } from 'src/app/shared/Interfaces/interface';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.sass']
})
export class AllBooksComponent implements OnInit {

  public data = [];

  constructor( private _service: BooksService) {}

  info: any[] = [];

  displayedColumns: string[] = ['userId', 'id', 'title', 'completed'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {

    this.dataSource.paginator = this.paginator;

     this._service.allBooks().subscribe(item => {
       this.dataSource.data = item
     });
  }
}
