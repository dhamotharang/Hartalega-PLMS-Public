import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineinfoNavComponent } from './components/lineinfo-nav/lineinfo-nav.component';
import { AlaramRecordComponent } from './alaram-record/alaram-record.component';
import { MatCardModule,MatTableModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,MatCardModule,MatTableModule
  ],
  declarations: [LineinfoNavComponent, AlaramRecordComponent]
})
export class PlmsLineinfoModule { }
