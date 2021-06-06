import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerSectionService {

  public isLoading = new BehaviorSubject(false);
}
