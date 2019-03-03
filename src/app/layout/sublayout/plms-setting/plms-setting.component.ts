import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {UserList,Describer} from '../models/line';
import {UserService} from '../services/userservice'


@Component({
  selector: 'app-plms-setting',
  templateUrl: './plms-setting.component.html',
  styleUrls: ['./plms-setting.component.css'],
  providers:[UserService]
})
export class PlmsSettingComponent implements OnInit {
  _lineobj:any;_linefields:any;_registeremail:string;
  linename:string;showburner:boolean=false;show_chart_lineinfo:boolean=false;
  Chart = [];burner_report:any ;
  displayedColumns:string[];columnsToDisplay:string[];dataSource:any;

  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList()
  {
    this._lineobj=null;this.dataSource=null;
    this._lineobj=new UserList();

    this._linefields = Describer.describe(this._lineobj);
    console.log(this._linefields);
    this.displayedColumns=this._linefields;
    this.columnsToDisplay = this.displayedColumns.slice();  
    this._userService.GetUsersList().subscribe(res_userlist=>
    {
      console.log(res_userlist);
      this.dataSource = new MatTableDataSource(res_userlist);
    })
    //this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'action'];
    //this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }
  
  selectedRow(_param:any)
  {
    console.log(_param);
  }
  InternalCheck(_param:any,_action:any)
  {  
    console.log(_action);
    switch(_action)
    {
      case "Delete":
      _param._isactive=1;
      
    }   
  }
  Delete(_param:any,_action:any)
  {
    console.log(_param);
    this._userService.DeleteUser(_param).subscribe(res_userdelete=>
    {
        console.log(res_userdelete);
        this.getUsersList();
        
      })
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  SaveEmail()
  {
    //console.log(this._registeremail);
    let register=new UserList();
    register._email=this._registeremail;
    console.log(JSON.stringify(register));
    this._userService.SaveUser(register).subscribe(res_savedata=>{
      console.log(res_savedata);
      this.getUsersList();
    })  
  }

}
