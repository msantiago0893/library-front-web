import { Component, OnInit,Input} from '@angular/core';

@Component({
  selector: 'app-prv-button',
  templateUrl: './prv-button.component.html',
  styleUrls: ['./prv-button.component.sass']
})
export class PrvButtonComponent implements OnInit {

  @Input() type : String = "" || "submit";
  @Input() label : String = "";
  @Input() onClick : Function;
  @Input()  isDisabled : boolean;
  @Input()  icon : String = "";

  constructor() { }

  ngOnInit() {
  }




}
