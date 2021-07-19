import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prv-carousel',
  templateUrl: './prv-carousel.component.html',
  styleUrls: ['./prv-carousel.component.sass']
})
export class PrvCarouselComponent implements OnInit {

  slides = [
    {'image': 'https://therichpost.com/wp-content/uploads/2021/02/Vuejs-Fashion-Ecommerce-Template-Free.png'},
    {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'},
    {'image': 'https://therichpost.com/wp-content/uploads/2020/10/Angular-10-Learning-Education-Center-Free-Template-1.png'},
    {'image': 'https://therichpost.com/wp-content/uploads/2020/11/Reactjs-Easy-Shop-Free-Template-with-Source-Code.png'},
    {'image': 'https://therichpost.com/wp-content/uploads/2021/02/angular-11-bootstrap-4.5-Ecommerce-Template-Free.png'}
  ];


  constructor() { }

  ngOnInit() {
  }

}
