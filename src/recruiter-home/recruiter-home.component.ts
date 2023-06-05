import { Component, ElementRef, InjectionToken, ViewChild } from "@angular/core";
import { IRecruiter } from "src/candidate-login/IRecruiter";
import { SharingService } from "src/shared/shared.service";
import { Router } from "@angular/router";
import { ICandidateView } from "./IcandidateView";
import { RecruiterHomeService } from "./recruiter-home.service";

@Component({
    selector:'recruiter-home',
    templateUrl: 'recruiter-home.component.html',
    styleUrls: ['recruiter-home.component.css']
})
export class RecruiterHomeComponent{
    pageTitle:string = "Recruiter home"
    
    _recruiter_response:IRecruiter = {recruiterId:'',recruiterName:'',recruiterEmail:'',password:'',errorMsg:'',authenticated:false}
    _candidates: ICandidateView[] = []
    filters:string[]=['Candidate Id','Candidate Name','Candidate Email','Candidate Role','Candidate Status','Candidate Qualification','Assessment Status']
    filterSelector:string=''
    candidateFilter:string = ''
    candidateFilters:string[]=[]
    errorMessage:string = ''
    popupFormEnabled:boolean = false;

    constructor(private _sharingService: SharingService, private _router:Router, private _recruiterHomeService:RecruiterHomeService){
        if(this._sharingService.sharedValue !== undefined){
            this._recruiter_response = this._sharingService.sharedValue
        }
        if(this._recruiter_response.authenticated === false && this._recruiter_response.recruiterId===""){
            this._router.navigate(["/candidate-login"])
        }
    }

    ngOnInit(){
        this._recruiterHomeService.getCandidates().subscribe(result=>this._candidates=result,error=>this.errorMessage=<any>error)
    }

    selectorChanged(){
        this.candidateFilters = [this.filterSelector,this.candidateFilter]
    }

    clearFilter(){
        this.filterSelector = ''
        this.candidateFilter =''
        this.selectorChanged();
    }

    checkOptions(candidate:ICandidateView){
        this._sharingService.sharedValue = [this._recruiter_response,candidate]
        this._router.navigate(["/schedule-assessment",candidate.candidateId])
    }

    logout(){
        this._router.navigate(["/candidate-login"])
    }

}