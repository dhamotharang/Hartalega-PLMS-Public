import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {PlmsLineinfoComponent} from './plms-lineinfo.component';
import {AlaramRecordComponent} from './alaram-record/alaram-record.component';
import {SublayoutComponent} from './../sublayout.component';

const  routes : Routes=[
    {
      
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PlmsLineInfoRoutingModule{}