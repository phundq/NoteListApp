import { UserService } from './../../core/services/user.service';
import { Login, EUserActions, LoginSuccess, LoginFail } from './../user/user.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
    constructor(private actions: Actions, private userService: UserService) {

    }
    @Effect()
    login$ = this.actions.pipe(
        ofType<Login>(EUserActions.LOGIN),
        switchMap(action => {
            const { email, password } = action.payload;
            return this.userService.login(email, password).pipe(
                map(res => new LoginSuccess(email)),
                catchError(e => of(new LoginFail()))
            );
        })
    );
};