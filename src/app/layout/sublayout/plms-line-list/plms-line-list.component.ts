import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Route, Router  } from '@angular/router';
import { PlantService } from '../services/plantservice';
@Component({
  selector: 'app-plms-line-list',
  templateUrl: './plms-line-list.component.html',
  styleUrls: ['./plms-line-list.component.css'],
  providers:[PlantService]
})


export class PLMSLineListComponent implements OnInit {

  line_start:number;line_stop:number; _plantid :any;line_name:string;
  data:any[]=[];Linedata:any[]=[];showLoading:boolean=false;
  showline:boolean=false;  showsettings:boolean=false;
  displayedColumns: string[];dataSource:any

  constructor(private _router:ActivatedRoute,
  private _navrouter:Router, private _plantservice:PlantService) { 
    this.setPlantId();
  }

  ngOnInit() 
  {
   this.setPlantId();
  }
  linehistory(reportname:any)
  {
    console.log(reportname);
    this._navrouter.navigate(['./lineinfo',reportname]);
  }
  setPlantId()
  {
    this.Linedata=[];
    this._router.params.subscribe(param =>
      {
        this._plantid=this._router.snapshot.paramMap.get('id')
         console.log('Plant Id is : '+this._router.snapshot.paramMap.get('id'));
         this.getData(this._router.snapshot.paramMap.get('id'));        
      });
  }

  getData(value : string)
  {
    this.showline=true;this.Linedata=[];
    //this.
    if(value == "4")
    {
      this._plantservice.GetLinesPlantByID(parseInt(value)).subscribe(datainfo=>
      {
            console.log(value);
            this.data=datainfo;
            console.log(datainfo[0]['LineName']);   
            this.LineInfo(datainfo[0]['LineName']) ;     
        });        
    }
    
    else{this.getStaticLineInfo(parseInt(value));}
  }
  
  getStaticLineInfo(plant_id:number) :any
  {
    this.data=[];this.Linedata=[];
    this.line_start=plant_id * 12 - 12 + 1;
    this.line_stop=this.line_start + 12;
    for (this.line_start; this.line_start < this.line_stop; this.line_start++) 
    {
      this.data.push({'LineName':'Line'+this.line_start,'LineCount':'NA','LineColor':'#d8d8d8' })
    }
  }

  

  LineInfo(_param:any)
  {   
    // localStorage.setItem('session_LineName', _param);
    this.line_name=_param
    this.Linedata=[];
    console.log(this._plantid);//this.showLoading=true;
    // console.log(_param);
    if(this._plantid==4 || this._plantid==5)
    {
      this._plantservice.GetLineInfoByLineName(_param).subscribe(lineinfobylinename=>
        {
            this.Linedata=lineinfobylinename;
            console.log(lineinfobylinename);
            this.showLoading=false;
        });
    }
  }

}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'firdaus@zen.com.my', weight: 1.0079, symbol: 'H', action: 'd'},
  {position: 2, name: 'kumar@zen.com.my', weight: 4.0026, symbol: 'He', action: 'd'},
  {position: 3, name: 'zaefrul@zen.com.my', weight: 6.941, symbol: 'Li', action: 'd'},
  {position: 4, name: 'weiwah@zen.com.my', weight: 9.0122, symbol: 'Be', action: 'd'},
  {position: 5, name: 'khairul@zen.com.my', weight: 10.811, symbol: 'B', action: 'd'},
  {position: 6, name: 'gary@zen.com.my', weight: 12.0107, symbol: 'C', action: 'd'},
  {position: 7, name: 'haini@zen.com.my', weight: 14.0067, symbol: 'N', action: 'd'},
  {position: 8, name: 'najihah@zen.com.my', weight: 15.9994, symbol: 'O', action: 'd'},
  {position: 9, name: 'hasrul@zen.com.my', weight: 18.9984, symbol: 'F', action: 'd'},
  {position: 10, name: 'afiq@zen.com.my', weight: 20.1797, symbol: 'Ne', action: 'd'},
];
