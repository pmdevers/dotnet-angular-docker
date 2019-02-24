import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PmdeversDirectivesModule } from './directives/directives.module';
import { PmdeversPipesModule } from './pipes/pipes.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,

        PmdeversDirectivesModule,
        PmdeversPipesModule
     ],
     exports: [
         CommonModule,
         FormsModule,
         ReactiveFormsModule,
         HttpClientModule,

         PmdeversDirectivesModule,
         PmdeversPipesModule
     ]
})
export class PmdeversSharedModule { }