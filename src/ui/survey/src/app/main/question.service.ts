import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';

import { AnswerService } from './answer.services';

@Injectable()
export class QuestionService implements OnDestroy {
    
    private _question: BehaviorSubject<any>
    private _unsubscribeAll: Subject<any>

    constructor(private answerService: AnswerService, private httpClient: HttpClient) { 

        this._question = new BehaviorSubject<any>(
            JSON.parse(localStorage.getItem('currentQuestion')) || {}
        );

        this._unsubscribeAll = new Subject<any>();

        this.answerService.answers
        .pipe(takeUntil(this._unsubscribeAll))    
        .subscribe(answers => {
            console.log(answers);
            this.httpClient.post('/answer', answers)
            .subscribe(question => {
                if ( question ){
                    localStorage.setItem('currentQuestion', JSON.stringify(question));
                    this._question.next(question);
                }
            });

            // let question = { test: 1 };

            // if ( question ){
            //     localStorage.setItem('currentQuestion', JSON.stringify(question));
            //     this._question.next(question);
            // }

        });
    }


    get currentQuestion(): any | Observable<any>
    {
        return this._question.asObservable();
    }


    ngOnDestroy(){
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}