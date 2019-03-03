import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-loadindicator',
  templateUrl: './loadindicator.component.html',
  styleUrls: ['./loadindicator.component.css']
})
export class LoadindicatorComponent implements OnInit {
  message : string;
  constructor(private spinner: NgxSpinnerService) 
  { 

  }
  ngOnInit()
  {
    this.spinner.show();
  }

  show()
  {
    this.spinner.show();
  }
  hide()
  {this.spinner.hide()}
}
