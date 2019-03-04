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
    GetLineChart(_name:string):Observable<any>
    {       
        
        if(_name=='Main Chain Amp Top')
        {
            console.log(url_plms.domain_url+url_plms.chart_service_GetLineChartTop);
            return this._http.get<any>(url_plms.domain_url+url_plms.chart_service_GetLineChartTop)
            .pipe(retry(3),catchError(this.handlerror));
        }
        else
        {
            console.log(url_plms.domain_url+url_plms.chart_service_GetLineChartBottom);
            return this._http.get<any>(url_plms.domain_url+url_plms.chart_service_GetLineChartBottom)
            .pipe(retry(3),catchError(this.handlerror));
        }
    }

    GetLowChampAmp(_name:string):Observable<any>
    {       
        if(_name=='Main Chain Amp Top')
        return this._http.get<any>(url_plms.domain_url+url_plms.chart_service_LowChampAmpTopMaxMin)
        .pipe(retry(3),catchError(this.handlerror));

        else
        return this._http.get<any>(url_plms.domain_url+url_plms.chart_service_LowChampAmpBottomMaxMin)
        .pipe(retry(3),catchError(this.handlerror));
    }

    DeleteUser(login_info:UserList):Observable<any>
    {
        var _smaccountname = login_info._email.split('@').slice(0);
        //console.log(login_info);
        let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json','Accept':'application/json',
              'Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'DELETE',
              'Access-Control-Allow-Headers': 'Origin, Content-Type',
            //   value:JSON.stringify(login_info)         
            })
          };
        //console.log(_smaccountname[0]);
        return this._http.delete<any>(url_plms.domain_url + url_plms.user_service_delete +_smaccountname[0],httpOptions)
        .pipe(retry(3),catchError(this.handlerror));
    }
    SaveUser(userInfo:UserList):Observable<any>
    {
        //let loginobj=new LoginUser();loginobj._email="asdfg";
        let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Accept':'application/json',
              'Access-Control-Allow-Origin':'*',
              'Access-Control-Allow-Method':'POST',
              'Access-Control-Allow-Headers': 'Origin, Content-Type',                 
            })
          };
        return this._http.post(url_plms.domain_url + url_plms.domain_url+"PlmsLogin/Post",JSON.stringify(userInfo),httpOptions)
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