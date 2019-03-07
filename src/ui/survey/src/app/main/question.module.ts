import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionComponent } from './question.component';
import { AnswerService } from './answer.services';
import { QuestionService } from './question.service';

const routes: Routes = [
    { 
        path: '', 
        component: QuestionComponent 
    }
];

@NgModule({
    providers: [
        AnswerService,
        QuestionService
    ],
    declarations: [
        QuestionComponent
    ],
    imports: [ 
        
        RouterModule.forChild(routes) 
    ],
})
export class QuestionModule {
}