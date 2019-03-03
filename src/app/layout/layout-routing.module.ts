import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';
import { PLMSPlantListComponent } from '../layout/plms-plant-list/plms-plant-list.component';
//import {PlmsSettingComponent} from '../layout/plms-setting/plms-setting.component';


const  routes : Routes=[
    
    { 
        path:'',component:LayoutComponent,
        children:[ 
                   { path: '', component:PLMSPlantListComponent },
                   { path: 'home/:id', loadChildren:'./sublayout/sublayout.module#SublayoutModule' },
                //    { path: '/settings', component:PlmsSettingComponent },
              ]
    },
    //{path:'',redirectTo:'/MainScreen2',pathMatch:'full'},
    // {path:'MainScreen2',component:PLMSPlantListComponent}
   
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class LayoutRoutingModule{}