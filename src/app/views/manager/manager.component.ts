import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { NavigationEnd, Router } from '@angular/router';
import { ErrorService } from '@services/error.service';
import { SpinnerSectionService } from '@services/spinner-section.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.sass']
})
export class ManagerComponent implements OnInit, AfterViewInit, OnDestroy {

  isError: Boolean = false;
  loading: boolean = null;
  subscription: Subscription = null;
  subscriptionLoader: Subscription = null;
  @ViewChild('sidenav', { static: true }) sideMenu: MatSidenav;

  constructor(
    private router: Router,
    private _errorService: ErrorService,
    private loaderService: SpinnerSectionService,
    private changeDetectorRef: ChangeDetectorRef
  ){}

  ngOnInit() {

    this._errorService.getError()
                      .subscribe((item: any) => {
                        this.isError = item;
                      });
  }

  ngAfterViewInit(): void {

    this.changeOfRoute();

    this.subscriptionLoader = this.loaderService.isLoading
                                .subscribe(response => {
                                  this.loading = response;
                                  this.changeDetectorRef.detectChanges();
                                });
  }

  changeOfRoute() {

    this.subscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this._errorService.isError(false);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionLoader.unsubscribe();
  }
}
