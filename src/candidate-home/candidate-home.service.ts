import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { IAssessment } from "./IAssessment";

@Injectable()
export class CandidateHomeService{

    private _dataUrl="http://localhost:8081/getAssessmentDetails"

    constructor(private _http:HttpClient){}

    getAssessments(candidateId:string):Observable<IAssessment[]>{
        let queryParams = new HttpParams();
        queryParams = queryParams.append("candidateId",candidateId);
        return this._http.get<IAssessment[]>(this._dataUrl,{params:queryParams}).pipe(catchError(this.handleError))
    }

    handleError(error:any){
        let errorMessage = ""
        if(error.error instanceof ErrorEvent){
            //get client side error
            errorMessage=error.error.message
        }
        else{
            //get server-side error
            errorMessage=`Error Code : ${error.status} \n Message: ${error.message}`
        }
        window.alert(errorMessage)
        return throwError(errorMessage)
    }

    // getAssessment(id:string):Observable<IAssessment>{
    //     return this.getAssessments().pipe(map(x=>x.filter(y=>y.assessmentId==id)[0]))
    // }
}