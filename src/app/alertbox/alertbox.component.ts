import { Component,Inject, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material";
import {
  MAT_DIALOG_DATA
} from "@angular/material";

@Component({
  selector: 'app-alertbox',
  templateUrl: './alertbox.component.html',
  styleUrls: ['./alertbox.component.css']
})
export class AlertboxComponent implements OnInit {
  email:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<AlertboxComponent>) { }

  ngOnInit() 
  {
    console.log(this.data);
    this.email=this.data.name;
  }
  Yes()
  {
    this.dialogRef.close(this.email);
  }
  No() 
  {
    this.dialogRef.close("No");
  }
}
