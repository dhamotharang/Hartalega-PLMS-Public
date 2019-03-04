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
  displayedColumns: string[];dataSource:any;
  line_summary:any;

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
        //  console.log('Plant Id is : '+this._router.snapshot.paramMap.get('id'));
         this.getData(this._router.snapshot.paramMap.get('id'));        
      });
  }

  getData(value : string)
  {
    this.showline=true;this.Linedata=[];
    //this.
    // if(value == "4")
    // {
      this._plantservice.GetLinesPlantByID(parseInt(value)).subscribe(datainfo=>
      {
            // console.log(value);
            this.data=datainfo;
            // console.log(datainfo[0]['LineName']);   
            this.LineInfo(datainfo[0]['LineName']) ;     
        });        
    // }
    
    // else{this.getStaticLineInfo(parseInt(value));}
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
    // console.log(this._plantid);//this.showLoading=true;
    // console.log(_param);
    if(this._plantid==4 || this._plantid==5)
    {
      this._plantservice.GetLineInfoByLineName(_param).subscribe(lineinfobylinename=>
      {
            this.Linedata=lineinfobylinename;
            // console.log(lineinfobylinename);
            this.showLoading=false;
            this.LineSummary(_param);
      });
    }
  }

  LineSummary(_param:any)
  {
    this._plantservice.GetLineSummaryByLineName(_param).subscribe(response_linesummary=>{
      // console.log(response_linesummary);
          this.line_summary=response_linesummary;
    })
  }

}


