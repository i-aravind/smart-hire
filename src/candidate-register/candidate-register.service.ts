import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICandidate } from "src/candidate-login/ICandidate";

@Injectable()
export class CandidateRegisterService{
    constructor(private _http: HttpClient) { }

    getCreateCandidateResponse(_request:ICandidate):Observable<ICandidate>{
        let url="http://localhost:8081/createCandidate"

        return this._http.post<ICandidate>(url,_request)
    }
}