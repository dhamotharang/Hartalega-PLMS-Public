import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../layout/sublayout/services/loginservice';
import { LoginUser } from '../layout/sublayout/models/user';

import {FormControl, Validators} from '@angular/forms';
import {LoadindicatorComponent } from '../layout/sublayout/loadindicator/loadindicator.component';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit 
{
  showLoading=false;userdata:any;
  objuserlogin:any; _email:string=''; _password:string='';
  constructor(private router: Router,private snackBar: MatSnackBar,
    //public dialog: MatDialog,
  private _loginservice:LoginService) { }

  ngOnInit() 
  {
    this.CheckSession();
  }
  
  CheckSession()
  {
    console.log('CheckSession');
    if(localStorage.getItem('loginname') != null && localStorage.getItem('loginname').toString()!="")
    {
      console.log(localStorage.getItem('loginname'));
      this.router.navigate(['MainScreen'],{queryParams:{'login_name':localStorage.getItem('loginname')}});
    }
  }

  Login()
  { 
    if(this._email!="" && this._email != null)
    {
      //this.showLoading=true;
      this.objuserlogin= new LoginUser();// this.objuserlogin._email='kumar@zen.com.my';// this.objuserlogin._password='*****';
      this.objuserlogin._email=this._email;
      this.objuserlogin._password=this._password;
      this._loginservice.Login(this.objuserlogin).subscribe(login_response=>
      {
          console.log(login_response);
          if(this._email==login_response['_email'])
          {
            localStorage.setItem('loginname', this._email);
            this.router.navigate(['MainScreen'],{queryParams:{'login_name':this._email}});
          }
          else
          {
            this.alertmessage("Invalid Login Details.");
           //this.router.navigate(['MainScreen']);
          }
        })     
      //this.router.navigate(['MainScreen']);
    }
    else{
      this.alertmessage("Invalid Login details.")
    }
  }

  alertmessage(message:string)
  {
    this.snackBar.open(message, "Ok", {
      duration: 2000,
    });
  }
}


