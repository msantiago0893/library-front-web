import { Component, OnInit, EventEmitter, Output, Input, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Storage } from 'src/app/shared/memento/Storage';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  isActive = false;

  constructor(
    private translate: TranslateService,
    private router: Router
  ) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
  }

  ngOnInit() { }

  @Output() cambio = new EventEmitter();
  @Input() navBar: any;


  switchLang(lang: string) {
    this.translate.use(lang);
  }

  logout() {
    Storage.clear();
    this.router.navigateByUrl('/signin');
  }

}
