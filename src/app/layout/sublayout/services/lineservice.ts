import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';

import { catchError,retry } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import * as url_plms  from '../../configuration/domain'

@Injectable()
export class LineService 
{
    constructor(private _http:HttpClient) { }
       
    GetLineInfo_BurnerReport(lineid:string):Observable<any>
    {
        console.log('lineid'+lineid);
        return this._http.get<any>(url_plms.domain_url+url_plms.line_service_GetLineInfo_BurnerReport+lineid)
        .pipe(retry(3),catchError(this.handlerror));
    }   
    
    GetLineInfo(lineid:string,requestname:string):Observable<any>
    {
        // console.log('lineid'+lineid);
        return this._http.get<any>(url_plms.domain_url+"/Line/"+requestname+"/"+lineid)
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