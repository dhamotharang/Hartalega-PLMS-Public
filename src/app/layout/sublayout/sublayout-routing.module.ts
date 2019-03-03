import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {SublayoutComponent} from './sublayout.component';
import {PLMSLineListComponent} from './plms-line-list/plms-line-list.component';
import {PlmsLineHistoryComponent} from './plms-line-history/plms-line-history.component';
import {PlmsSettingComponent} from './plms-setting/plms-setting.component';


const  routes : Routes=[
    {
        path:'',
        component:SublayoutComponent,
        children:[ 
        { path: '', component:PLMSLineListComponent},
        { path: 'settings',component:PlmsSettingComponent},
        { path: 'home', component:PLMSLineListComponent,
          children:[
              { path:'home/:id',component:PLMSLineListComponent },
              { path: 'settings',component:PlmsSettingComponent},
            ]},

        { path: 'lineinfo',component:PlmsLineHistoryComponent},
        { path: 'lineinfo/:linename',component:PlmsLineHistoryComponent},
        
       
       
        ]
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class SubLayoutRoutingModule{}