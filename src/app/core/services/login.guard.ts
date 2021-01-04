import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { LocalStorageService } from './local-storage.service';

/** Loading guard */
@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private localStorage: LocalStorageService) {}

  /** Method for check access for user */
  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> {
    return this.localStorage.getItem('token').pipe(map((token) => !!token));
  }
}
