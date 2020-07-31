import { Login } from './../../../../store/user/user.actions';
import { IAppState } from './../../../../store/index';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil, filter, delay } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-store-a',
  templateUrl: './test-store-a.component.html',
  styleUrls: ['./test-store-a.component.css']
})
export class TestStoreAComponent implements OnInit {

  loginForm: FormGroup;

  loading$: Observable<boolean>;
  success$: Observable<boolean>;
  error$: Observable<boolean>;
  destroy$: Subject<void> = new Subject();
  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>,
    private router: Router
  ) { }

  ngOnInit() {
    // this.loading$ = this.store.select(getLoadingLogin).pipe(takeUntil(this.destroy$));
    // this.success$ = this.store.select(getSuccessLogin).pipe(takeUntil(this.destroy$));
    // this.error$ = this.store.select(getFailLogin).pipe(takeUntil(this.destroy$));
    this.initForm();
    this.onLoginSucess();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initForm() {
    this.loginForm = this.fb.group({
      email: '',
      password: ''
    });
  }
  submit() {
    const { email, password } = this.loginForm.value;
    this.store.dispatch(new Login({ email, password }));
  }
  onLoginSucess() {
    this.success$.pipe(
      filter(success => success),
      //đợi 3s sau khi login thành công,chuyển tới home page
      delay(3000),
    ).subscribe(success => {
      this.router.navigate(['home']);
    });
  }

}
