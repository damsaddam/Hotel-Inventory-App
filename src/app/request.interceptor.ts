import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '@nestjs/common';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method === 'POST') {
      const newReq = request.clone({
        headers: new HttpHeaders({ token: '081936789damkji' }),
      })
      return next.handle(newReq);
    }
    console.log('Request Interceptor is work', request)
    return next.handle(request);
  }
}
