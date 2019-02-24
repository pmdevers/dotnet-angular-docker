import { Component, OnInit } from '@angular/core';
import { PmdeversAuthenticationService } from '@pmdevers/services/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

    constructor(
        private _authenticationService: PmdeversAuthenticationService,
        private _router: Router
        ) { }

    ngOnInit() { 

    }

    logout() {
        this._authenticationService.logout();
        this._router.navigate(['/pages/auth/login']);
    }
}