import { User } from './../model/user.model';
import {AuthActions} from '../action-types';
import {on , createReducer} from '@ngrx/store';

import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
export interface AuthState {
  user:User
}

export const initialAuthState: AuthState = {
  user: undefined
}

// export const reducers: ActionReducerMap<AuthState> = {

// };

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state,action) => {
    // console.log("Calling login reducer")
    // debugger;
    return {
      user: action.user
    }
  }),
  on(AuthActions.logout,(state,action) => {
    return {
      user:undefined
    }
  })
)

