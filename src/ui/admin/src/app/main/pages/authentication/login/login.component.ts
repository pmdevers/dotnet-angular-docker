import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PmdeversConfigService } from '@pmdevers/services/config.service';
import { PmdeversAuthenticationService } from '@pmdevers/services/authentication.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;
    submitted = false;
    error = '';
    private _returnUrl: string;

    constructor(
        private _configService: PmdeversConfigService,
        private _authenticationService: PmdeversAuthenticationService,
        private _formBuilder: FormBuilder,
        private _route: ActivatedRoute,
        private _router: Router
    ) { 
        this._configService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                toolbar: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                sidePanel: {
                    hidden: true
                }
            }
        };

        this._returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
    }

    ngOnInit() { 
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    login(){
        const values = this.loginForm.value;

        console.log(values);
        this._authenticationService.login(values.email, values.password)
            .pipe(first())
            .subscribe(
                data => {
                    this._router.navigate([this._returnUrl])
                },
                error => {
                    this.error = error;
                    this.loading = false;
                }
            )
    }

}