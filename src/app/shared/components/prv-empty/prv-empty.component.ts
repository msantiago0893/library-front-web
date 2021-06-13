import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-prv-empty',
  templateUrl: './prv-empty.component.html',
  styleUrls: ['./prv-empty.component.sass']
})
export class PrvEmptyComponent implements OnInit {

  @Input() msg2: String = "";
  constructor() { }

  ngOnInit() {
  }








}
