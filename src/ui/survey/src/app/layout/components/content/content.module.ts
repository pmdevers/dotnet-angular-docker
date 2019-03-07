import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
         ContentComponent 
    ],
    imports: [ 
        CommonModule,
        RouterModule 
    ],
    exports: [ 
        ContentComponent 
    ]
})
export class ContentModule { 

}