import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, mapTo, switchMap, tap } from 'rxjs/operators';

import { AppConfig } from '../models/app-config';
import { UserModel } from '../models/user.model';

import { HttpClientProvider } from './http-client.provider';
import { UserProvider } from './user.provider';

const AUTH_URL = 'auth';

@Injectable()
export class AuthProvider {
  constructor(
    private http: HttpClientProvider,
    private config: AppConfig,
    private userProvider: UserProvider,
  ) {}

  public login(email: string, password: string): Observable<UserModel> {
    // const body = {
    //   email,
    //   password,
    // };

    // return this.http
    //   .postRequest<UserModel>(`${this.config.apiEndpoint}/${AUTH_URL}`, body)
    //   .pipe(
    //     tap((res) => {
    //       const token = res.token;
    //       this.userProvider.currentUser$.next(res);
    //        this.setUser(token);
    //     }),
    //     mapTo(void 0)
    //   );
    this.userProvider.setUser({
      token: 'trtrtrtrt',
      birthDay: '2020.01.01',
      cards: [{ title: 'Mr. Dre' }, { title: 'Ms. Dre' }],
      name: 'Alex',
      secondName: 'Shat',
    });

    return of({
      token: 'trtrtrtrt',
      birthDay: '2020.01.01',
      cards: [{ title: 'Mr. Dre' }, { title: 'Ms. Dre' }],
      name: 'Alex',
      secondName: 'Shat',
    } as UserModel).pipe(delay(1000));
  }
}
