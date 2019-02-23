import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PmdeversDirectivesModule } from './directives/directives.module';
import { PmdeversPipesModule } from './pipes/pipes.module';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        PmdeversDirectivesModule,
        PmdeversPipesModule
     ],
     exports: [
         CommonModule,
         FormsModule,
         ReactiveFormsModule,

         PmdeversDirectivesModule,
         PmdeversPipesModule
     ]
})
export class PmdeversSharedModule { }