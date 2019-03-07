import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {UserList,Describer} from '../models/line';
import {UserService} from '../services/userservice';
import {AlertboxComponent} from '../../../alertbox/alertbox.component';
import {MatSnackBar} from '@angular/material';

import {
  MatDialog,
  MatDialogConfig
} from "@angular/material";


@Component({
  selector: 'app-plms-setting',
  templateUrl: './plms-setting.component.html',
  styleUrls: ['./plms-setting.component.css'],
  providers:[UserService]
})
export class PlmsSettingComponent implements OnInit {
  _lineobj:any;_linefields:any;_registeremail:string;
  linename:string;showburner:boolean=false;show_chart_lineinfo:boolean=false;hideme:boolean=false;
  Chart = [];burner_report:any ;
  displayedColumns:string[];columnsToDisplay:string[];dataSource:any;
  constructor(private _userService:UserService,private snackBar: MatSnackBar,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList()
  {
    this._registeremail='';
    this._lineobj=null;this.dataSource=null;
    this._lineobj=new UserList();

    this._linefields = Describer.describe(this._lineobj);
    ////console.log(this._linefields);
    this.displayedColumns=this._linefields;
    this.columnsToDisplay = this.displayedColumns.slice();  
    this._userService.GetUsersList().subscribe(res_userlist=>
    {
      ////console.log(res_userlist);
      this.dataSource = new MatTableDataSource(res_userlist);
    })
    //this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'action'];
    //this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }
  
  // selectedRow(_param:any)
  // {
  //   //console.log(_param);
  // }
  IsAdmin(_param:any,_action:any)
  {  
    console.log(_action);
    let register=new UserList();
    register._email=_param._email;
    if(_param._internal==1){register._internal=0}
    if(_param._internal==0){register._internal=1}
    console.log(JSON.stringify(register));
    this._userService.UpDateUser(register).subscribe(res_savedata=>{
      //console.log(res_savedata);
      this.getUsersList();
    })   
  }

  alertmessage(message:string)
  {
    this.snackBar.open(message, "Ok", {
      duration: 2000,
    });
  }

  Delete(_param:any,_action:any)
  {
    //console.log(_action);
    if(_action=="Delete")
    {
      this.openDialog(_param);
    }
  }

  openDialog(_param:any) 
  {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {name:_param._email};
    //console.log(dialogConfig.data);
    let dialogRef = this.dialog.open(AlertboxComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(value => 
    {
      if(value==_param._email)
      {
        this._userService.DeleteUser(_param).subscribe(res_userdelete=>
        {
          //console.log('DeleteUser');
          //console.log(res_userdelete);
          this.getUsersList();
          
        })
      }
    });
  }

  FindUser()
  {
    let register=new UserList();register._email=this._registeremail;
    this._userService.findUser(register).subscribe(res_savedata=>
    {
      //console.log(res_savedata['_email']);
      //console.log(register._email);
      if(String(res_savedata['_email'])=='Found')
      {
        this.snackBar.open(this._registeremail+" already existed.", "Ok", {
          duration: 60000,
        });        
      }
      else
      {
        this.SaveEmail();
      }
    }) 

    // this.getUsersList();
    // this._registeremail='';
  }
  SaveEmail()
  {
    //console.log('Came to SaveEmail fun');
    // if(!this.checkemailsetting())
    // {
      let register=new UserList();
      register._email=this._registeremail;
      //console.log(JSON.stringify(register));
      this._userService.SaveUser(register).subscribe(res_savedata=>{

        //console.log(res_savedata);
        this.getUsersList();
        this._registeremail='';
      })  
    // }
    // else
    // {
    //   this.snackBar.open(this._registeremail+" already existed.", "Ok", {
    //       duration: 60000,
    //     });
    // }
    
  }
  
  applyFilter(filterValue: string) 
  {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  checkemailsetting():boolean
  {   
     let userfound=false;
     //console.log(this._registeremail);
     let finduser=this.dataSource.filter(this._registeremail.trim().toLowerCase());
     //console.log(finduser);
    //  if(this.dataSource.filter==this._registeremail.trim().toLowerCase())
    //  {
    //     //console.log('User Found');
    //     userfound=true;
    //  }
    //  else
    //  {
      
    //  }
     this.dataSource.filter="";
    return userfound;
  }
}


