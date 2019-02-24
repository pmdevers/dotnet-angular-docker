import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, takeUntil } from 'rxjs/operators';
import { PmdeversConfigService } from './config.service';

@Injectable({ providedIn: 'root'})
export class PmdeversAuthenticationService implements OnDestroy {
    
    private _currentUser: BehaviorSubject<any>
    private _api_endpoint: string;
    private _unsubscribeAll: Subject<any>;

    
    constructor(private _http: HttpClient, private _configService: PmdeversConfigService) {
        this._currentUser = new BehaviorSubject<any>(
            JSON.parse(localStorage.getItem('currentUser'))
        );

        this._unsubscribeAll = new Subject();

        this._init();
    }

    get currentUser(): any
    {
        return this._currentUser.getValue();
    }

    private _init() : void 
    {
        this._configService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(
                (settings) => {
                    this._api_endpoint = settings.authentication.endpoint;
                }
            );

    }

    login(username: string, password: string) {
        return this._http.post<any>
        (this._api_endpoint, { username, password})
        .pipe(map(user => {

            if ( user && user.token ) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                this._currentUser.next(user);
            }

            return user;
        }));
    }

    logout() {
        localStorage.removeItem('currentUser');
        this._currentUser.next(null);
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}