import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SpinnerServiceService } from '@services/spinner-service.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(private spinnerService: SpinnerServiceService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      this.spinnerService.show();

      return next
          .handle(req)
          .pipe(
              tap((event: HttpEvent<any>) => {
                  if (event instanceof HttpResponse) {
                      this.spinnerService.hide();
                  }
              }, (error) => {
                  this.spinnerService.hide();
              })
          );
  }
}