import { NgModule } from '@angular/core';

import { ContentModule } from '../components/content/content.module';
import { Layout1Component } from './layout1.component';

@NgModule({
    declarations: [ 
        Layout1Component
    ],
    imports: [ 
        ContentModule
    ],
    exports: [ 
        Layout1Component    
    ]
})
export class Layout1Module { }