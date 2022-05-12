﻿import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalAuthService } from '../services/helpers/local-auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private localAuth: LocalAuthService
    ) { console.log( this.localAuth.userObj)}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const user = this.localAuth.userObj;
        if (user.auth_token) {
            // check if route is restricted by role
            // if (route.data['user_type'] && !route.data['user_type'].includes(user.user_type)) {
            //     // role not authorized so redirect to home page
            //     this.router.navigate(['/' ]);
            //     return false;
            // }
            // authorized so return true
            return true;
        }
        // not logged in so redirect to login page with the return url 
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}