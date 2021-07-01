import { AfterViewInit, ChangeDetectorRef, Component, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { NavigationEnd, Router } from '@angular/router';
import { ErrorService } from '@services/error.service';
import { SpinnerSectionService } from '@services/spinner-section.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.sass']
})
export class ManagerComponent implements OnInit, AfterViewInit, OnDestroy {

  panelOpenState = false;
  isError: Boolean = false;
  loading: boolean = null;
  opened = true;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;
  private subscription: any;

  constructor(
    private router: Router,
    private _errorService: ErrorService,
    private loaderService: SpinnerSectionService,
    private changeDetectorRef: ChangeDetectorRef
  ){ }

  ngOnInit() {

    if (window.innerWidth < 768) {

      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {

      this.sidenav.fixedTopGap = 55;
      this.opened = true;
    }

    this._errorService.getError()
                      .subscribe((item: any) => {
                        this.isError = item;
                      });
  }

  ngAfterViewInit(): void {

    this.changeOfRoute();

    this.subscription =  this.loaderService.isLoading.subscribe(response => {

                            this.loading = response;

                            this.changeDetectorRef.detectChanges();
                          });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  changeOfRoute() {
    //TODO: Detectar cambio de rutas
    this.subscription =  this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        this._errorService.isError(false);
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth < 768) {
      this.sidenav.fixedTopGap = 55;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 55
      this.opened = true;
    }
  }

  /* METODO de mrnu */
  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }

  datoHijo:String = "Sin dato";
  funCambiar(e: any) {
    console.log(e);
    this.datoHijo = e;
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }
}
