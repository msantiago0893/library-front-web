import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.sass']
})
export class ViewBooksComponent implements OnInit {

  users: any[] = [];

  constructor( ) { }

  ngOnInit() {

  }

}
