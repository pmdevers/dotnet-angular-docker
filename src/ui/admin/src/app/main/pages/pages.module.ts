import { NgModule } from '@angular/core';
import { LoginModule } from './authentication/login/login.module';

@NgModule({
    imports: [
        LoginModule
     ],
})
export class PagesModule { }