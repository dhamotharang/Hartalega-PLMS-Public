import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { catchError,retry } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse,HttpHeaders} from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';
import * as url_plms  from '../../configuration/domain'

@Injectable()
export class PlantService 
{
    constructor(private _http:HttpClient) { }
    
    

    GetLinesPlantByID(plantid:number):Observable<any>
    {       
        return this._http.get<any>(url_plms.domain_url+url_plms.plant_service_get+plantid)
        .pipe(retry(3),catchError(this.handlerror));
    }
    
   

    GetLineInfoByLineName(linename:string):Observable<any>
    {
        //console.log('linename'+linename);
        //console.log('lineid'+lineid);
        return this._http.get<any>(url_plms.domain_url+url_plms.plant_GetIndividual_LineInfo+linename)
        .pipe(retry(3),catchError(this.handlerror));
    }
    GetLineSummaryByLineName(lineid:string):Observable<any>
    {
        //console.log('lineid'+lineid);
        return this._http.get<any>(url_plms.domain_url+url_plms.Plant_GetIndividual_LineInfoSummary+lineid)
        .pipe(retry(3),catchError(this.handlerror));
    }
    GetPlantsList():Observable<any>
    {
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              'Access-Control-Allow-Methods':'GET',
              'Access-Control-Allow-Origin':'*',
              'Access-Control-Allow-Headers': 'Origin',
            })
          };

        return this._http.get<any>(url_plms.domain_url+url_plms.plant_GetPlantsList)
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