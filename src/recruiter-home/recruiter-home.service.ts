import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { ICandidateView } from "./IcandidateView";

@Injectable()
export class RecruiterHomeService{

    private _dataUrl="http://localhost:8081/getAllCandidates"

    constructor(private _http:HttpClient){}

    getCandidates():Observable<ICandidateView[]>{
        return this._http.get<ICandidateView[]>(this._dataUrl).pipe(catchError(this.handleError))
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

    getCandidate(id:string):Observable<ICandidateView>{
        return this.getCandidates().pipe(map(x=>x.filter(y=>y.candidateId==id)[0]))
    }
}