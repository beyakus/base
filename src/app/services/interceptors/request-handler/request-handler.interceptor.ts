import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { catchError, finalize, Observable, throwError, map } from 'rxjs';
import { LoadingService } from '@services/loading/loading.service';
import { ToastrService } from 'ngx-toastr';
import { Messages } from '@helpers/enums/messages-request/messages';
import { excludeMessagesToastPost } from '@config/exclude/excludeMessagesToast';

@Injectable()
export class RequestHandlerInterceptor implements HttpInterceptor {
  private _cout = 0;
  constructor(
    private _loadingService: LoadingService,
    private _toastrService: ToastrService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this._loadingService.show();
    this._cout++;
    let req;

    return next.handle(req || request).pipe(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          if (request.method !== 'GET' && !this._excludeMessages(request.url)) {
            this._toastrService.success(Messages.Success);
          }
        }
        return event;
      }),
      catchError((e: HttpErrorResponse) => {
        this._toastrService.error(e.error?.errors[0]?.type);
        return throwError(e);
      }),
      finalize(() => {
        /*
         * This variable _count is used to validate if there is more than one request running
         * If it is 0, it means that there are no more requests and the loading can be closed.
         */
        this._cout--;
        if (this._cout === 0) {
          this._loadingService.hidden();
        }
      })
    );
  }

  private _excludeMessages(url: string): boolean {
    const data = excludeMessagesToastPost;
    let result = false;
    data.forEach((excludeName) => {
      if (url.toLowerCase().includes(excludeName.toLowerCase())) {
        result = true;
      }
    });

    return result;
  }
}
