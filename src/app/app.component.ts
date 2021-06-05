import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { ErrorService } from '@services/error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  isLoaded: boolean = false;

  constructor (
    private router: Router,
    private _service: ErrorService
  ) {}

  ngOnInit(): void {

    if (this._service.isLoader) {
      this._service.getLoader().subscribe((item: any) => {
        console.log('Status ', item);
        this.isLoaded = item;
        setTimeout(() => {
          this._service.isLoader(false);
        },2000);
      });
    }
    

  }

}
