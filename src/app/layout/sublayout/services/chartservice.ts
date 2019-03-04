import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { RequestOptions, Request, RequestMethod} from '@angular/http';
import { UserList } from '../models/line';
import { LoginUser } from '../models/user';
import * as url_plms  from '../../configuration/domain';

@Injectable()
export class ChartService 
{
    
    constructor(private _http:HttpClient) { }
    GetLineChart(_name:string,_linename:string):Observable<any>
    {       
        //console.log('Present Line is :'+_linename);
        if(_name=='Main Chain Amp Top')
        {
            //console.log(url_plms.domain_url+url_plms.chart_service_GetLineChartTop);
            return this._http.get<any>(url_plms.domain_url+url_plms.chart_service_GetLineChartTop+_linename)
            .pipe(retry(3),catchError(this.handlerror));
        }
        else
        {
            //console.log(url_plms.domain_url+url_plms.chart_service_GetLineChartBottom);
            return this._http.get<any>(url_plms.domain_url+url_plms.chart_service_GetLineChartBottom+_linename)
            .pipe(retry(3),catchError(this.handlerror));
        }
    }

    GetLowChampAmp(_name:string,_linename:string):Observable<any>
    {       
        if(_name=='Main Chain Amp Top')
        return this._http.get<any>(url_plms.domain_url+url_plms.chart_service_LowChampAmpTopMaxMin+_linename)
        .pipe(retry(3),catchError(this.handlerror));

        else
        return this._http.get<any>(url_plms.domain_url+url_plms.chart_service_LowChampAmpBottomMaxMin+_linename)
        .pipe(retry(3),catchError(this.handlerror));
    }
    private handlerror(error_res:HttpErrorResponse)
    {
          if(error_res.error instanceof ErrorEvent){console.error('Client Side Error :',error_res.error.message)}
          else{console.error('Serve Side Error :',error_res)}
    
          //return  new ErrorObservable('Service Problem.');
          return throwError('Service Problem');
      }

}