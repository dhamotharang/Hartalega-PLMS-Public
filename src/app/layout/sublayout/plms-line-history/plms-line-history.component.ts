import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { Line_BurnerLockout,Line_Menu,Line_PreRoller,Gas,
  Line_BeadingMotor,Line_BrushMotor,Line_RinseBlower} from '../models/line';
import { Describer} from '../models/line';
import { ActivatedRoute,Route, Router, DefaultUrlSerializer  } from '@angular/router';
import { LineService } from '../services/lineservice';
import { ChartService } from '../services/chartservice';
import { AnimationStyleNormalizer } from '@angular/animations/browser/src/dsl/style_normalization/animation_style_normalizer';
import { ColumnName } from '../models/column';


@Component({
  selector: 'app-plms-line-history',
  templateUrl: './plms-line-history.component.html',
  styleUrls: ['./plms-line-history.component.css'],
  providers:[LineService,Line_Menu,ChartService]
})
export class PlmsLineHistoryComponent implements OnInit 
{
  @ViewChild('canvas') canvas: ElementRef;
  
   _lineobj:any;_linefields:any; 
   _chartlabels:Array<any>=[];
   _chartdata:Array<any>=[];
   _charttop:Array<any>=[];
   _chartbottom:Array<any>=[];
    chart =[];
    linename_reportname=[];
    low_champ_amp=[];
    SelectedParam:any;
    CurrentParam:any

  linename: any; showburner: boolean = false; show_chart_lineinfo = false;
  linechart = []; burner_report: any;
  displayedColumns: string[]; columnsToDisplay: string[]; dataSource: any;
  CName: any;
  constructor(private _router: ActivatedRoute, private _chartservice: ChartService,
    private _lineservice: LineService, private _con_linemenu: Line_Menu) {
    //console.log(this._con_linemenu.Line_RequestMethods_const());
    //this.default_reportname()
    //this.chart_lineinfo();
    this.CName = new ColumnName();
    this.getlinename();
  }

  ngOnInit() 
  {

    this.getlinename();

    this.CurrentParam = this._router.snapshot.paramMap.get('linename').split('&');
    this.setActiveParam(this.CurrentParam[1]);
    this.SelectedParam = this.CurrentParam[1];
  }
  

  setActiveParam(paramID):any {
    this.SelectedParam = paramID;
  }

  mpStatus:boolean = false;
  mpSelectBool(){
    this.mpStatus = !this.mpStatus;
  }

  getlinename()
  {
    this.linename_reportname=this._router.snapshot.paramMap.get("linename").split('&');
    this.linename = this.linename_reportname[0];
    
    let obj=new Line_Menu().Line_RequestMethods_const().find(x=>x.Title==this.linename_reportname[1]);
    this.showReport(obj);

  }
  chart_apis(_name:string)
  {
    this._chartbottom.length=this._chartdata.length=this._chartlabels.length=0;
    this._charttop.length=this._chartbottom.length=0;
    
    this.chart.length=0;
    this._chartservice.GetLineChart(_name,this.linename).subscribe(res_linechartdata=>
    {
      res_linechartdata.forEach(element => 
      {
        this._chartlabels.push(element._time);
        this._chartdata.push(element._avg);
        this._charttop.push(element._top);
        this._chartbottom.push(element._bottom);    
        this.chart_lineinfo(_name); 
        this.low_champ_maxmin(_name,this.linename);
      });
    })
  }
  default_reportname()
  {
    this.showReport(this._router.snapshot.paramMap.get('_historyreportname'));
  }
  getColumns(_requestname:string)
  {   
    this._linefields = Describer.describe(this._lineobj);
    this.displayedColumns=this._linefields;
    this.columnsToDisplay = this.displayedColumns.slice();  
    this.BurnerReport(this.linename,_requestname);
  }
  showReport(_reportname)
  {
    this._lineobj=null;this.dataSource=null;

    switch(_reportname.Title) 
    { 
      case "": 
      {
        this.show_chart_lineinfo=false;
        this._lineobj=new Line_BurnerLockout();this.getColumns('GetLineInfoBurnerReport');this.showburner=true;
        break; 
      }
      case "Burner Lockout": 
      { 
        this.show_chart_lineinfo=false;
        this._lineobj=new Line_BurnerLockout();this.getColumns(_reportname.method);this.showburner=true;
        break; 
      } 
      case "Pre-Roller Motor": 
      { 
        this.show_chart_lineinfo=false;
        this._lineobj=new Line_PreRoller();this.getColumns(_reportname.method);this.showburner=true;
         break; 
      } 
      case "Beading Motor": 
      { 
        this.show_chart_lineinfo=false;
        this._lineobj=new Line_BeadingMotor();this.getColumns(_reportname.method);this.showburner=true;
         break; 
      } 

      case "Cleaning Brush Motor": 
      { 
        this.show_chart_lineinfo=false;
        this._lineobj=new Line_BrushMotor();this.getColumns(_reportname.method);this.showburner=true;
         break; 
      }
      case "Rinse Blower": 
      { 
        this.show_chart_lineinfo=false;
        this._lineobj=new Line_RinseBlower();this.getColumns(_reportname.method);this.showburner=true;
         break; 
      }

      case "Main Chain Amp Top": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
              
         break; 
      }

      case "Main Chain Amp Bottom": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
             
         break; 
      }
////////////////////////////////////////////////////////
      case "Coagulant Level": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
             
         break; 
      }
      case "Coagulant Temperature": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
             
         break; 
      }
      case "Latex Level": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
             
         break; 
      }
      case "Latex Temperature": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
             
         break; 
      }
      case "Chlorine Level": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
             
         break; 
      }
      case "Gas": 
      { 
        this.show_chart_lineinfo=false;
        this._lineobj=new Gas();this.getColumns(_reportname.method);this.showburner=true;
        break;            
      }

      case "Electricity A": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
             
         break; 
      }

      case "Electricity B": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
             
         break; 
      }

      case "Acid 1": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
             
         break; 
      }

      case "Acid 2": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
             
         break; 
      }

      case "Acid Bath": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
             
         break; 
      }

      case "Alkaline 1": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
             
         break; 
      }

      case "Alkaline 2": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
             
         break; 
      }

      case "Hot Bath": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
             
         break; 
      }

      case "Hot Rinse": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
             
         break; 
      }

      case "Hot Water": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
             
         break; 
      }

      case "Coagulant Tank": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
             
         break; 
      }

      case "Latex Tank": 
      { 
        this.linechart=null;this.showburner=false;
        this.show_chart_lineinfo=true;
        this.chart_apis(_reportname.Title);   
             
         break; 
      }
    }
      
  }
  
  BurnerReport(_lineName:string,_requestname:string)
  {
    //console.log(_requestname);
    this._lineservice.GetLineInfo(_lineName,_requestname).subscribe(lineinfobylinename=>
    {
      console.log(lineinfobylinename);
        lineinfobylinename.slice().forEach(element => 
        {
          element['Datetime_Hours'] = this.CName.HourFormat(element['Datetime_Hours'])
        });
        this.dataSource=lineinfobylinename;
          //console.log(this.dataSource);         
    });
  }
  linemenu:string[]=this._con_linemenu.Line_RequestMethods_const();

  low_champ_maxmin(_param:string,linename:string)
  {
    this._chartservice.GetLowChampAmp(_param,linename).subscribe(data_lowchampamp=>
      {
      this.low_champ_amp=data_lowchampamp;
      //console.log(data_lowchampamp);
    })
  }
  chart_lineinfo(_chartheader:string)
  { 
    //let chart=new Chart()
    this.linechart = new Chart('linechart', {
      type: 'line',
      responsive: false,
      maintainAspectRatio: false,
      data: {
        //labels:this._chartlabels,
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23S'],
        datasets: [
          {
            label: '24 Hours Report',
            backgroundColor: 'green',
            borderColor: 'green',
            //data: this._chartdata,
            data: [45, 1, 3, 34, 32, 5, 13, 73, 31, 12, 5, 61, 82, 3, 34, 32, 5, 13, 73, 31, 12, 5, 61, 82],
            fill: false,
            lineTension: 0
          }, 
          {
            label: 'Top',
            fill: false,
            backgroundColor: 'red',
            borderColor: 'red',
            //data:this._charttop
            data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
          },
          {
            label: 'Bottom',
            fill: false,
            backgroundColor: 'Blue',
            borderColor: 'Blue',
            //data:this._chartbottom,
            data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
          }
      ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: _chartheader
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        // hover: {
        //   mode: 'nearest',
        //   intersect: true,
        //   animations:false
        // },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Shift'
            }
          }],
          yAxes: [{
            display: false,
            scaleLabel: {
              display: false,
              labelString: 'Level'
            }
          }]
        }
      }

    });
  }
}

  
  

