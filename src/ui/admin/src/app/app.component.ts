import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PmdeversConfigService } from '@pmdevers/services/config.service';
import { PmdeversSplashScreenService } from '@pmdevers/services/splashscreen.service';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  
  config: any;

  private _unsubscribeAll: Subject<any>;

  constructor(
    @Inject(DOCUMENT) private _document: any,
    private _configService: PmdeversConfigService,
    private _splashScreenService: PmdeversSplashScreenService,
    private _platform: Platform    
  )
  {
     if ( this._platform.ANDROID || this._platform.IOS ){
       this._document.body.classList.add('is-mobile');
     }

     this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._configService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
          this.config = config;

      });
    }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
