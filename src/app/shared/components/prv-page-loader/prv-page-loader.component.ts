import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prv-page-loader',
  templateUrl: './prv-page-loader.component.html',
  styleUrls: ['./prv-page-loader.component.sass']
})
export class PrvPageLoaderComponent  {

  active: boolean = true;

  constructor() {
    // preloader.loading$
    //   .subscribe(status => this.active = status);
   }

}
