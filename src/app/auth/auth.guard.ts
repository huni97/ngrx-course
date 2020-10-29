import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AppState } from 'app/reducers';
import { isLoggedIn } from './auth.selectors';
import { Injectable } from '@angular/core';

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(
        private store:Store<AppState>,
        private router:Router
        ) {}

    canActivate(route: ActivatedRouteSnapshot,state:RouterStateSnapshot)
        :Observable<boolean> {

        return this.store.pipe(
            select(isLoggedIn),
            tap(loggedIn => {
                if (!loggedIn) {
                    console.log(loggedIn);
                    this.router.navigateByUrl('/login');
                }
            })
            )
        }

}