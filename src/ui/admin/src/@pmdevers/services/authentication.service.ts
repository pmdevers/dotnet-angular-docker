import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class PmdeversAuthenticationService {
    private _currentUser: BehaviorSubject<any>

    constructor(private _http: HttpClient) {
        this._currentUser = new BehaviorSubject<any>(
                JSON.parse(localStorage.getItem('currentUser'))
                );
    }

    get currentUser(): any | Observable<any>
    {
        return this._currentUser.asObservable();
    }

    login(username: string, password: string) {
        return this._http.post<any>
        (`/users/authenticate`, { username, password})
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
}