import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule      } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {AuthGuard} from './Auth';
import { NgxSpinnerModule } from 'ngx-spinner';
//import { PlmsLineHistoryComponent } from './app/sublayout/plms-line-history/plms-line-history.component';
//import { PLMSPlantListComponent } from './layout/plms-plant-list/plms-plant-list.component';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {FormsModule} from '@angular/forms';
// import { PopupComponent } from './popup/popup.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
//import { PlmsSettingComponent } from './sublayout/plms-setting/plms-setting.component';
// import { MatChipsModule } from '@angular/material/chips'
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatBadgeModule } from '@angular/material/badge';
//import { LoadindicatorComponent } from './layout/sublayout/loadindicator/loadindicator.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    // PopupComponent,
    // LoadindicatorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,HttpClientModule,
    MatCardModule,MatInputModule,MatButtonModule,
    FormsModule,NgxSpinnerModule,MatDialogModule,MatSnackBarModule
    // MatChipsModule,
    // MatTabsModule,
    // MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
