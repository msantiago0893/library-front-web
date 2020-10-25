import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prv-user',
  templateUrl: './prv-user.component.html',
  styleUrls: ['./prv-user.component.sass']
})
export class PrvUserComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
