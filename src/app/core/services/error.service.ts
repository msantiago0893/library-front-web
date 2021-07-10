import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private error$: Subject<boolean>;

  constructor() {
    this.error$ = new Subject();
  }

  isError(value: any) {
    this.error$.next(value);
  }

  getError(): any {
    return this.error$.asObservable();
  }
}
