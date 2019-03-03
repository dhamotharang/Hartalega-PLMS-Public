import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {  AuthGuard} from './guards/auth-guard.service'


const routes: Routes = [ 
    { 
      path: 'MainScreen',
      loadChildren:'./layout/layout.module#LayoutModule',
      canActivate: [AuthGuard]
    },
    {
      path: '',
      component: LoginComponent,
      pathMatch:'full'
    },
    {
      path: '**',
      component: PagenotfoundComponent,
      
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
