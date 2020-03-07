import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.sass']
})
export class ViewBooksComponent implements OnInit {

  users: any[] = [];

  constructor(protected service: BooksService ) { }

  ngOnInit() {

    this.service.getUsers().subscribe(
      (data) => {
        //this.users = data['results'] 
        console.log( data );
      }
    );
  }

}
