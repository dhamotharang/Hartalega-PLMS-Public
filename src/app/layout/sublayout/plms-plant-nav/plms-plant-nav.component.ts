import { Component, OnInit } from '@angular/core';
import { PlantService } from '../services/plantservice';
import { Route,ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-plms-plant-nav',
  templateUrl: './plms-plant-nav.component.html',
  styleUrls: ['./plms-plant-nav.component.css'],
  providers:[PlantService]
})
export class PLMSPlantNavComponent implements OnInit {
  public IsAdmin = false;
  data:any;
  categoryColor:string;
  currentPlant:any

  constructor(private _plantservice:PlantService,private route:ActivatedRoute) 
  { 
    
    //console.log('PLMSPlantNavComponent');
  }

  ngOnInit() 
  {
    // console.log('PLMSPlantNavComponent2');
    this.ShowHideSettingMenu();
    this.data = this. getpalntlist();  
    //set default active nav
    this.currentPlant = this.route.snapshot.paramMap.get('id');
    this.setActiveNav(this.currentPlant);
    this.SelectedPlant = this.currentPlant;
  }

  ShowHideSettingMenu()
  {
    if(localStorage.getItem('role')=='Admin')
    {
      // console.log('Is Admin.');
      this.IsAdmin =true;
    }else{this.IsAdmin =false;}
  }

  getpalntlist():any
  {
    this._plantservice.GetPlantsList().subscribe(data=>
    {
        // console.log(data);
    });

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

  SelectedPlant:any;
  setActiveNav(plantID):any
  {
    this.SelectedPlant = plantID;
  }

  mplStatus:boolean = false;
  mplSelectBool(){
    this.mplStatus = !this.mplStatus;
    console.log('this is ' + this.mplStatus);
  }

}
