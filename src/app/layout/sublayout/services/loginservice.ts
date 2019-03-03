import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';

import { catchError,retry } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { LoginUser } from '../models/user';
import * as url_plms  from '../../configuration/domain'
@Injectable()
export class LoginService 
{
    constructor(private _http:HttpClient) { }
       
    Login(login_info:LoginUser):Observable<any>
    {      
        let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Accept':'application/json',
              'Access-Control-Allow-Origin':'*',
              'Access-Control-Allow-Methods':'POST',
              'Access-Control-Allow-Headers': 'Origin, Content-Type'         
            })
          };
        //console.log(JSON.stringify(login_info));
        return this._http.post(url_plms.domain_url+url_plms.login_service_get,JSON.stringify(login_info),httpOptions)
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