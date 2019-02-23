import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PmdeversConfigService } from 'src/@pmdevers/services/config.service';
import { PmdeversAuthenticationService } from 'src/@pmdevers/services/authentication.service';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(
        private _configService: PmdeversConfigService,
        private _authenticationService: PmdeversAuthenticationService,
        private _formBuilder: FormBuilder
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
    }

    ngOnInit() { 
        this.loginForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    login(){
        this._authenticationService.log
    }

}