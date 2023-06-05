import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IAssessment } from "src/candidate-home/IAssessment";
import { ICandidate } from "src/candidate-login/ICandidate";

@Injectable()
export class ScheduleAssessmentService{
    constructor(private _http: HttpClient) { }

    getScheduleAssessmentResponse(_request:IAssessment):Observable<boolean>{
        let url="http://localhost:8081/scheduleAssessment"

        return this._http.post<boolean>(url,_request)
    }

    revokeAssessment(_request:IAssessment):Observable<boolean>{
        let url="http://localhost:8081/revokeAssessment"

        return this._http.post<boolean>(url,_request)
    }
}