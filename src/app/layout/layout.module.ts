import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { PLMSHeaderComponent } from '../layout/shared/plms-header/plms-header.component';
import { PLMSPlantListComponent } from '../layout/plms-plant-list/plms-plant-list.component';

import{LayoutRoutingModule} from './layout-routing.module';
//import { SublayoutComponent } from './sublayout/sublayout.component';

import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips'
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
// import { PlmsSettingComponent } from './plms-setting/plms-setting.component';



@NgModule({
  imports: [
    CommonModule,LayoutRoutingModule,
    MatCardModule,
    MatChipsModule,
    MatTabsModule,
    MatBadgeModule
  ],
  declarations: [LayoutComponent,PLMSHeaderComponent,PLMSPlantListComponent]
})
export class LayoutModule { }
