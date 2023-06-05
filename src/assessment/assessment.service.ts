import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IQuestion } from "./IQuestion";
import { IsubmissionRequest } from "./ISubmissionRequest";

@Injectable()
export class AssessmentService{

    private _dataUrl="http://localhost:8081/getQuestions"

    private _submissionUrl = "http://localhost:8081/submission"

    constructor(private _http:HttpClient){}

    getQuestions(assessmentId:string):Observable<IQuestion[]>{
        let queryParams = new HttpParams();
        queryParams = queryParams.append("assessmentId",assessmentId);
        return this._http.get<IQuestion[]>(this._dataUrl,{params:queryParams})
    }

    sendSubmission(candidateId:string,assessmentId:string,questions:IQuestion[]){
        let submissionrequest:IsubmissionRequest = {candidateId: candidateId,assessmentId: assessmentId,questions: questions}
        return this._http.post<number>(this._submissionUrl,submissionrequest)
    }
}