import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PLMSLineListComponent } from './plms-line-list/plms-line-list.component';
import { SublayoutComponent } from './sublayout.component';
import { SubLayoutRoutingModule } from './sublayout-routing.module';
import { PLMSPlantNavComponent } from './plms-plant-nav/plms-plant-nav.component'
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips'
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoadindicatorComponent } from './loadindicator/loadindicator.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PlmsLineinfoComponent } from './plms-lineinfo/plms-lineinfo.component';
import { MatTableModule } from '@angular/material/table';
import { PlmsLineHistoryComponent } from './plms-line-history/plms-line-history.component';
 import { PlmsSettingComponent } from './plms-setting/plms-setting.component';
 import { MatInputModule } from '@angular/material/input';
 import { MatButtonModule } from '@angular/material/button';
 import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,SubLayoutRoutingModule,
    MatCardModule,
    MatChipsModule,
    MatTabsModule,
    MatBadgeModule,
    NgxSpinnerModule,FormsModule,
    MatTableModule,MatCheckboxModule,MatInputModule,MatButtonModule
  ],
  declarations: [SublayoutComponent,PLMSPlantNavComponent,PLMSLineListComponent,
    LoadindicatorComponent, 
    PlmsSettingComponent,
    PlmsLineinfoComponent, PlmsLineHistoryComponent,]
})
export class SublayoutModule { }
