import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Notifications } from '@services/notifications.service';

@Component({
  selector: 'app-prv-notifications',
  templateUrl: './prv-notifications.component.html',
  styleUrls: ['./prv-notifications.component.sass']
})
export class PrvNotificationsComponent implements OnInit {

  @ViewChild('asNotification', {static: true}) notification: ElementRef;
  @ViewChild('asNotc', {static: true}) notc: ElementRef;
  isToggled = false;
  notifications = null;
  private unlistener: () => void;

  constructor(
    private _notification : Notifications,
    private renderer: Renderer2,
    private router: Router,
  ) { }

  ngOnInit() {
    this.retrieveNotifications();
  }

  retrieveNotifications() {

    this._notification.consultAll()
      .subscribe( response => {
        this.notifications = response;
      });
  }

  toogle() {

    if(!this.unlistener) {

      this.unlistener = this.renderer.listen('window', 'click', () => {

        if(this.notification.nativeElement.contains(event.target)) {

          this.renderer.addClass(this.notc.nativeElement, 'show-notification');
        } else {
          this.hideNotification();
        }
      });
    }
  }

  hideNotification() {

    this.renderer.removeClass(this.notc.nativeElement, 'show-notification');
    this.unlistener();
    this.unlistener = undefined;
  }

  goToSection(notification) {

    this.hideNotification();

    this.router.navigateByUrl(`/manager/${notification.path}`);
  }
}
