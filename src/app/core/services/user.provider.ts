import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UserModel } from '../models/user.model';
import { DestroybleBase } from './destroyble-base';

import { HttpClientProvider } from './http-client.provider';
import { LocalStorageService } from './local-storage.service';

/** Service for work with user */
@Injectable()
export class UserProvider extends DestroybleBase {

  constructor(
    private httpClient: HttpClientProvider,
    private localStorage: LocalStorageService,
  ) {
    super();
  }

  private currentUser$ = new BehaviorSubject<UserModel>(null);

  public me(): Observable<UserModel> {
    return this.currentUser$;
  }

  public setUser(user: UserModel): void {
    this.currentUser$.next(user);
    this.localStorage.setItem('token', user.token).pipe(takeUntil(this.destroy$)).subscribe();
  }

}
