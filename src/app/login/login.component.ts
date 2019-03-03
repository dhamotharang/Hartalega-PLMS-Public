import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../layout/sublayout/services/loginservice';
import { LoginUser } from '../layout/sublayout/models/user';

import {FormControl, Validators} from '@angular/forms';
import {LoadindicatorComponent } from '../layout/sublayout/loadindicator/loadindicator.component';
import {MatSnackBar} from '@angular/material';

// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

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

  ngOnInit() {
  }
  
  Login()
  { 
    //this.showLoading=true;
    this.objuserlogin= new LoginUser();
    // this.objuserlogin._email='kumar@zen.com.my';
    // this.objuserlogin._password='Sampath415';
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

  alertmessage(message:string)
  {
    this.snackBar.open(message, "Ok", {
      duration: 2000,
    });
  }
  // alertmessage(): void {
  //   const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '100%',      
  //     data: {name: this._email}
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');    
  //   });
  // }
}


// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {

//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }

// export interface DialogData {
//   animal: string;
//   name: string;
// }