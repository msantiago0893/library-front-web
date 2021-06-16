import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private error$: Subject<boolean>;

  private loaderPage$: Subject<boolean>;

  constructor() {
    this.error$ = new Subject();
    this.loaderPage$ = new Subject();
  }

  isError(value: any) {
    this.error$.next(value);
  }

  isLoader(value: any) {
    this.loaderPage$.next(value);
  }

  getError(): any {
    // console.log('Error');
    return this.error$.asObservable();
  }

  getLoader(): any {
    // console.log('getLoader');
    // setTimeout(() => {
    // },2000);
    return this.loaderPage$.asObservable();
  }
}
