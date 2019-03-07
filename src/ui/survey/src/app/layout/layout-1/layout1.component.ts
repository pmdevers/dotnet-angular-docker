import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'layout1',
    templateUrl: 'layout1.component.html',
    styleUrls: [ 'layout1.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class Layout1Component implements OnInit, OnDestroy {

    private _unsubscribeAll: Subject<any>;

    constructor() {
        this._unsubscribeAll = new Subject<any>();
     }

    ngOnInit() { 

    }

    ngOnDestroy() {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}