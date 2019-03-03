import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plms-plant-list',
  templateUrl: './plms-plant-list.component.html',
  styleUrls: ['./plms-plant-list.component.css']
})
export class PLMSPlantListComponent implements OnInit {
  
  data:any
  constructor() { }

  ngOnInit() 
  {
    this.data = this. getpalntlist();
    //console.log(this.data);
  }

  getpalntlist():any
  {
    let page;
    page= [
          {"Id" : "1"},
          {"Id" : "2"},
          {"Id" : "3"},
          {"Id" : "4"},
          {"Id" : "5"},
          {"Id" : "6"},
          {"Id" : "7"}
        ]
    
        return page
  }

}
