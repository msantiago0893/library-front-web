import { Component, OnInit, EventEmitter, Output, Input, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  isActive = false;

  constructor(
    private translate: TranslateService
  ) { 
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
    // const browserLang = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  ngOnInit() { }

  @Output() cambio = new EventEmitter();
  @Input() navBar: any;


  // cambiar() {
  //   this.cambio.emit("Dato emitido");
  //   console.log('Menu => ', this.navBar);
  // }
  // activar() {
  //   console.log('Ocultar menu');
  //    this.isActive = !this.isActive;
  // }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  // public useLanguage(lang: string): void {
  //   this.translateService.setDefaultLang(lang);
  // }


}
