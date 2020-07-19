import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {tap, catchError} from 'rxjs/operators';
import { MessageService } from 'primeng/api';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(public messageService: MessageService) {
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    return next.handle(req).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          if (evt.body && evt.body.success) {
            // successful response
            // this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Success Via MessageService'});
          }
        }
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          try {
            this.messageService.add({severity: 'error', summary: 'Service Message', detail: err.message});
          } catch (e) {
            this.messageService.add({severity: 'error', summary: 'Service Message', detail: e.message});
          }
          // log error
        }
        return of(err);
      })
    );
  }
}
