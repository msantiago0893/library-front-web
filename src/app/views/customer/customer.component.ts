import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.sass']
})
export class CustomerComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  main() {
    this.router.navigated = false;
    this.router.navigate(['profile']);
  }

}
