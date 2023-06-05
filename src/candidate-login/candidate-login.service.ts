import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import { AuthenticateResponse } from "./AuthenticateResponse";
import { AuthenticateRequest } from "./AuthenticateRequest";
import { Observable } from "rxjs";
import { IRecruiter } from "./IRecruiter";

@Injectable()
export class CandidateLoginService{

    constructor(private _http: HttpClient) { }

    getAuthenticateResponse(_request:AuthenticateRequest):Observable<AuthenticateResponse>{
        let queryParams = new HttpParams();
        queryParams = queryParams.append("user",_request.data.username);
        queryParams = queryParams.append("password",_request.data.password);
        return this._http.get<AuthenticateResponse>(_request.url,{params:queryParams})
    }

    getAuthenticateRecuiterResponse(_request:AuthenticateRequest):Observable<IRecruiter>{
        let queryParams = new HttpParams();
        queryParams = queryParams.append("user",_request.data.username);
        queryParams = queryParams.append("password",_request.data.password);
        return this._http.get<IRecruiter>(_request.url,{params:queryParams})
    }

}