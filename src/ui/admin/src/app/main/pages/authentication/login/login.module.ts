import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PmdeversSharedModule } from '@pmdevers/shared.module';

import { LoginComponent } from './login.component';

const routes = [
    {
        path     : 'auth/login',
        component: LoginComponent
    }
];

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        PmdeversSharedModule
    ]
})
export class LoginModule
{
}