import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { AuthGuard } from './Auth';



const routes: Routes = [ 
    { 
      path: 'MainScreen',
      loadChildren:'./layout/layout.module#LayoutModule',
      //canActivate: [AuthGuard]
    },
    {
      path: '',
      component: LoginComponent,
      pathMatch:'full'
    }

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
