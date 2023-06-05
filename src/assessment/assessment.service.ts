import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IQuestion } from "./IQuestion";

@Injectable()
export class AssessmentService{

    private _dataUrl="http://localhost:8081/getQuestions"

    constructor(private _http:HttpClient){}

    getQuestions(assessmentId:string):Observable<IQuestion[]>{
        let queryParams = new HttpParams();
        queryParams = queryParams.append("assessmentId",assessmentId);
        return this._http.get<IQuestion[]>(this._dataUrl,{params:queryParams})
    }
}