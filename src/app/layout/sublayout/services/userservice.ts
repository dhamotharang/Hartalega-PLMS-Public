import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import { RequestOptions, Request, RequestMethod} from '@angular/http';
import { UserList } from '../models/line';
import { LoginUser } from '../models/user';
import * as url_plms  from '../../configuration/domain'
@Injectable()
export class UserService 
{
    
    constructor(private _http:HttpClient) { }
    GetUsersList():Observable<any>
    {       
        return this._http.get<any>(url_plms.domain_url + url_plms.user_service_get)
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
        return this._http.post(url_plms.domain_url +"PlmsLogin/Post",JSON.stringify(userInfo),httpOptions)
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