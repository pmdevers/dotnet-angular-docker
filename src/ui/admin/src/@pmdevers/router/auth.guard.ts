import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PmdeversAuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root'})
export class AuthGuard implements CanActivate {
    
    constructor(
        private _router: Router,
        private authenticationService: PmdeversAuthenticationService
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot){
        
            const currentUser = this.authenticationService.currentUser;

            if( currentUser ) {
                return true;
            }

            this._router.navigate(['/pages/auth/login'], {
                queryParams: { returnUrl: state.url }
            });
            return false;
    }


}