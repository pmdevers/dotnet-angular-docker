import { NgModule, Optional, SkipSelf } from "@angular/core";
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { PMDEVERS_CONFIG, PmdeversConfigService } from './services/config.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './interceptors';
import { PmdeversAuthenticationService } from './services/authentication.service';

@NgModule()
export class PmdeversModule
{
    constructor(@Optional() @SkipSelf() parentModule: PmdeversModule)
    {
        if ( parentModule ){
            throw new Error("Pmdevers is already loaded. Import it in the AppModule only!!");
        }
    }

    static forRoot(config): ModuleWithProviders
    {
        return {
            ngModule: PmdeversModule,
            providers: [
                PmdeversAuthenticationService,
                PmdeversConfigService,
                {
                    provide: HTTP_INTERCEPTORS, 
                    useClass: JwtInterceptor, 
                    multi: true
                },
                {
                    provide: HTTP_INTERCEPTORS, 
                    useClass: ErrorInterceptor, 
                    multi: true
                },
                {
                    provide: PMDEVERS_CONFIG,
                    useValue: config
                }
            ]
        }
    }
}