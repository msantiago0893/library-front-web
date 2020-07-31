import { Component, OnInit, EventEmitter, Output, Host, Input ,Renderer2, ElementRef } from '@angular/core';
import { AppComponent } from 'src/app/app.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(
    //@Host() private _app: AppComponent
    private renderer: Renderer2,
    private elmRef: ElementRef
  ) { }

  ngOnInit() {
  }

  iconMenus = true;
  showMenuResponsive() {
    this.iconMenus = !this.iconMenus;
  }

  @Output() cambio = new EventEmitter();
  @Input() navBar: any;

  cambiar() {
    this.cambio.emit("Dato emitido");
    console.log('Menu => ', this.navBar);
  }

}
