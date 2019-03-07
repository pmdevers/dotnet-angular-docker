import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import * as _ from 'lodash';

@Injectable()
export class AnswerService implements OnDestroy {
    
    private _answers: BehaviorSubject<any>;
    private _unsubscribeAll: Subject<any>;

    constructor() {
        this._answers = new BehaviorSubject<any>(
            JSON.parse(localStorage.getItem('answers'))
        );

        this._unsubscribeAll = new Subject<any>();
    }

    get answers(): any | Observable<any>
    {
        return this._answers.asObservable();
    }

    answer(value: any){

        let answers = this._answers.getValue();

        answers = _.merge({}, answers, value);
        
        localStorage.setItem('answers', JSON.stringify(answers));

        this._answers.next(answers);
    }

    ngOnDestroy()
    {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}