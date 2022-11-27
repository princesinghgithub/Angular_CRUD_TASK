import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req: any, next: any) {
    let userservice = this.injector.get(UserService)
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `bearer ${userservice.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
