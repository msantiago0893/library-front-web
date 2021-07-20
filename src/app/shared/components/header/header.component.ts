import { Component, HostListener, Input, OnInit } from '@angular/core';
import { SessionService } from '@services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  @Input() sidenav: any = null;
  opened = true;

  constructor(
    private _service: SessionService,
  ) { }

  ngOnInit() {

    if (this.sidenav) {
      this.onAdjustViewport();
    }
  }

  onAdjustViewport() {

    if (window.innerWidth < 768) {

      this.sidenav.fixedTopGap = 55;

      this.opened = false;
    } else {

      this.sidenav.fixedTopGap = 55;

      this.opened = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {

    console.log('HostListener');
    if (this.sidenav) {
      if (event.target.innerWidth < 768) {
        this.sidenav.fixedTopGap = 55;
        this.opened = false;
      } else {
        this.sidenav.fixedTopGap = 55
        this.opened = true;
      }
    }
  }

  isBiggerScreen() {

    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }
}
