import { IUserState } from './user/user.states';
import { userReducer } from './user/user.reducer';
import { ActionReducerMap } from '@ngrx/store';

export interface IAppState {
    user: IUserState;
}

export const appReducer: ActionReducerMap<IAppState> = {
    user: userReducer
};