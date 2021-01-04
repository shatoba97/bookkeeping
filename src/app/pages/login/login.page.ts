import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DestroybleBase } from 'src/app/core/services/destroyble-base';

import { AuthProvider } from '../../core/services/auth.provider';

/** Login component */
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends DestroybleBase{
  constructor(private authProvider: AuthProvider, private router: Router) {
    super();
  }
  /** Auth form */
  public form = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl(''),
  });

  /** Flag of auth process */
  public isAuthInProgress$ = new BehaviorSubject(false);

  /** Login form */
  public login(): void {
    if (this.form.invalid) {
      return;
    }
    this.isAuthInProgress$.next(true);
    this.authProvider
      .login(this.form.controls['email'].value, this.form.controls['password'].value)
      .pipe(
        catchError((e) => {
          alert('Sorry, I love you');
          return of(null);
        }),
      )
      .subscribe({
        next: () => this.router.navigateByUrl('tabs'),
        complete: () => {
          this.isAuthInProgress$.next(false);
        },
      });
  }
}
