import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Chart } from 'chart.js';
import { Line_BurnerLockout,Line_Menu,Line_PreRoller,
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

    this.CurrentParam = this._router.snapshot.paramMap.get('_historyreportname');
    console.log('this is param ' + this._router.snapshot.paramMap.get('linename'));
    this.setActiveParam(this.CurrentParam.Title);
    //this.chart_apis()
    //this.default_reportname()
    //this.chart_lineinfo();
  }

  setActiveParam(paramID):any {
    this.SelectedParam = paramID;
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
    this._chartlabels=[];
    this._chartlabels=[];
    this._chartdata=[];
    this._charttop=[];
    this._chartbottom=[];
    this.chart =[];
  this._chartservice.GetLineChart(_name).subscribe(res_linechartdata=>
  {
    res_linechartdata.forEach(element => {
      this._chartlabels.push(element._time);
      this._chartdata.push(element._avg);
      this._charttop.push(element._top);
      this._chartbottom.push(element._bottom);

      this.chart_lineinfo(); 
      this.low_champ_maxmin(_name);
    });
    //console.log(this._chartlabels);
  })
  }
  default_reportname()
  {
    console.log(this._router.snapshot.paramMap.get('_historyreportname'));
    this.showReport(this._router.snapshot.paramMap.get('_historyreportname'));
  }
  getColumns(_requestname:string)
  {   
    this._linefields = Describer.describe(this._lineobj);
    this.displayedColumns=this._linefields;
    console.log(this.displayedColumns);
    this.columnsToDisplay = this.displayedColumns.slice();  
    this.BurnerReport(this.linename,_requestname);
  }
  showReport(_reportname)
  {
    this._lineobj=null;this.dataSource=null;

    console.log(_reportname.Title);

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
        this.linechart=null;
        //this._lineobj=new Line_RinseBlower();this.getColumns(_reportname.method);
        this.show_chart_lineinfo=true;
        //this.chart_lineinfo();  
        //this.show_chart_lineinfo=true;
        this.chart_apis(_reportname);   
              
        this.showburner=false;
         break; 
      }

      case "Main Chain Amp Bottom": 
      { 
        this.linechart=null;
        this.show_chart_lineinfo=true;
        //this.chart_lineinfo();  
        //this.show_chart_lineinfo=true;
        this.chart_apis(_reportname);   
              
        this.showburner=false;
         break; 
      }
    }
      
  }
  
  BurnerReport(_lineName:string,_requestname:string)
  {
    console.log(_requestname);
    this._lineservice.GetLineInfo(_lineName,_requestname).subscribe(lineinfobylinename=>
      {
        this.dataSource=lineinfobylinename;
          console.log(this.dataSource);         
      });
  }
  linemenu:string[]=this._con_linemenu.Line_RequestMethods_const();

  low_champ_maxmin(_param:string)
  {
    this._chartservice.GetLowChampAmp(_param).subscribe(data_lowchampamp=>
      {
      this.low_champ_amp=data_lowchampamp;
      console.log(data_lowchampamp);
    })
  }
  chart_lineinfo()
  { 
    //let chart=new Chart()
    this.linechart = new Chart('linechart', {
      type: 'line',
      data: {
        labels:this._chartlabels,
        // labels: ['7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', '12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM'],
        datasets: [
          {
            label: '24 Hours Report',
            backgroundColor: 'green',
            borderColor: 'green',
            data: this._chartdata,
            //data: [45, 1, 3, 34, 32, 5, 13, 73, 31, 12, 5, 61, 82, 3, 34, 32, 5, 13, 73, 31, 12, 5, 61, 82],
            fill: false,
            lineTension: 0
          }, 
          {
            label: 'Top',
            fill: false,
            backgroundColor: 'red',
            borderColor: 'red',
            data:this._charttop
            //data: [70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70],
          },
          {
            label: 'Bottom',
            fill: false,
            backgroundColor: 'Blue',
            borderColor: 'Blue',
            data:this._chartbottom,
            //data: [50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
          }
      ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Main Chain Amp Bottom'
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
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

  
  

