import { Injectable, Inject } from "@angular/core";
import { AnimationPlayer, AnimationBuilder, style, animate } from '@angular/animations'
import { DOCUMENT } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { take, filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PmdeversSplashScreenService
{
    splashScreenEl: any;
    player: AnimationPlayer;

    constructor(
        private _animationBuilder: AnimationBuilder,
        @Inject(DOCUMENT) private _document: any,
        private _router: Router
    ){
        this._init();
    }

    private _init(): void{
        this.splashScreenEl = this._document.body.querySelector('#pmdevers-splash-screen');

        if ( this.splashScreenEl ) 
        {
            this._router.events
                .pipe(
                    filter((event => event instanceof NavigationEnd)),
                    take(1)
                )
                .subscribe(() => {
                    setTimeout(() => {
                        this.hide();
                    });
                });
        }

    }

    show() : void 
    {
        this.player = this._animationBuilder
        .build([
            style({
                    opacity: '0',
                    zIndex: '99999'
            }),
            animate('400ms ease', style({opacity: '1'}))
        ]).create(this.splashScreenEl);
    
        setTimeout(() => {
            this.player.play();
        }, 0);
    }
    
    hide(): void{
        this.player = this._animationBuilder
        .build([
            style({opacity: '1'}),
            animate('400ms ease',
                style({
                    opacity: '0',
                    zIndex: '-10'
                })
            )
        ]).create(this.splashScreenEl);

        setTimeout(() => {
            this.player.play();
        }, 0);
    }
}