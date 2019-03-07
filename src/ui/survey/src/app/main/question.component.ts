import { Component, OnInit, OnDestroy } from '@angular/core';
import { AnswerService } from './answer.services';
import { Subject, pipe } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { QuestionService } from './question.service';

@Component({
    selector: 'question',
    templateUrl: 'question.component.html'
})
export class QuestionComponent implements OnInit, OnDestroy {

    private question: any;
    private _unsubscribeAll: Subject<any>;

    constructor(private answerService: AnswerService, private questionService: QuestionService) {
        
        this._unsubscribeAll = new Subject<any>();

        
    }

    answer(){
        this.answerService.answer({ test: 'test'});
    }

    ngOnInit() {
        this.questionService.currentQuestion
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(question =>{
            this.question = question;
        });
        
    }

    ngOnDestroy(){
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}