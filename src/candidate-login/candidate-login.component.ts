import { Component } from "@angular/core";
import { ICandidate } from "./ICandidate";
import { SharingService } from "src/shared/shared.service";
import { AuthenticateRequest } from "./AuthenticateRequest";
import { AuthenticateResponse } from "./AuthenticateResponse";
import { CandidateLoginService } from "./candidate-login.service";
import { Router } from "@angular/router";
import { IRecruiter } from "./IRecruiter";

@Component({
    selector: 'candidate-login',
    templateUrl: 'candidate-login.component.html',
    styleUrls: ['candidate-login.component.css']
})
export class CandidateLoginComponent{
    pageTitle:string = 'Candidate Login'
    identity:string = 'Candidate';
    label:string = 'Email / Candidate Reference number'
    label_candidate:string = 'Email / Candidate Reference number'
    label_recruiter:string = 'Email / Recruiter Id'
    loginUrl:string = ''
    _candidate:ICandidate = {candidateId:'',candidateName:'',dob:'',email:'',password:'',role:'',yearsofExperience:0,candidateQualification:'',errorMsg:''}
    _recruiter_response:IRecruiter = {recruiterId:'',recruiterName:'',recruiterEmail:'',password:'',errorMsg:'',authenticated:false}
    _request:AuthenticateRequest = {url: this.loginUrl,data:{username:this._candidate.candidateId,password:this._candidate.password}}
    _response:AuthenticateResponse = {candidateId:'',candidateName:'',dob:'',email:'',password:'',role:'',yearsofExperience:0,candidateQualification:'',authenticated:false}
    _requestSent:string = '';
    constructor(private _sharingService: SharingService,private _customerLoginService:CandidateLoginService, private _router:Router){
    }
    
    auth(){
        if(this.identity === 'Candidate'){
            this.loginUrl = 'http://localhost:8081/authenticate'
            this._request = {url: this.loginUrl,data:{username:this._candidate.candidateId,password:this._candidate.password}}
            this._customerLoginService.getAuthenticateResponse(this._request).subscribe(_resp=>{
                this._response = _resp
                this._sharingService.sharedValue = this._response
                this._requestSent = this._response.authenticated?'1':'0'
                setTimeout(()=>{this._response.authenticated ? this._router.navigate(["/candidate-home",this._response.candidateId]) : ''}, 1000)
                this._candidate = {candidateId:'',candidateName:'',dob:'',email:'',password:'',role:'',yearsofExperience:0,candidateQualification:'',errorMsg:''}
            })
        }
        if(this.identity === 'Recruiter'){
            this.loginUrl = 'http://localhost:8081/authenticateRecruiter'
            this._request = {url: this.loginUrl,data:{username:this._candidate.candidateId,password:this._candidate.password}}
            this._customerLoginService.getAuthenticateRecuiterResponse(this._request).subscribe(_resp=>{
                this._recruiter_response = _resp
                this._sharingService.sharedValue = this._recruiter_response
                this._requestSent = this._recruiter_response.authenticated?'1':'0'
                setTimeout(()=>{this._recruiter_response.authenticated ? this._router.navigate(["/recruiter-home",this._recruiter_response.recruiterId]) : ''}, 1000)
                this._candidate = {candidateId:'',candidateName:'',dob:'',email:'',password:'',role:'',yearsofExperience:0,candidateQualification:'',errorMsg:''}
            })
        }
    }

    onTabClick(identity:string){
        this._requestSent = ''
        this.identity = identity
        if(identity==='Recruiter'){
            this.label = this.label_recruiter
        }
        if(identity==='Candidate'){
            this.label = this.label_candidate
        }
        this._candidate = {candidateId:'',candidateName:'',dob:'',email:'',password:'',role:'',yearsofExperience:0,candidateQualification:'',errorMsg:''}
    }

    register(){
        this._router.navigate(["/candidate-register"])
    }
}