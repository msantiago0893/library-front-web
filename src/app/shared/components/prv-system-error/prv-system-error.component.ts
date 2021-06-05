import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ErrorService } from '@services/error.service';

@Component({
  selector: 'app-prv-system-error',
  templateUrl: './prv-system-error.component.html',
  styleUrls: ['./prv-system-error.component.sass']
})
export class PrvSystemErrorComponent implements OnInit {

  constructor(
    private _errorService: ErrorService
  ) { }

  ngOnInit() {
  }

  onBack() {
    this._errorService.isError(false);
  }
}
