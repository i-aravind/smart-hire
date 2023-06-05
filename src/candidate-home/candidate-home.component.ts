import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticateResponse } from "src/candidate-login/AuthenticateResponse";
import { SharingService } from "src/shared/shared.service";
import { CandidateHomeService } from "./candidate-home.service";
import { IAssessment } from "./IAssessment";

@Component({
    selector:'candidate-home',
    templateUrl: 'candidate-home.component.html',
    styleUrls: ['candidate-home.component.css']
})
export class CandidateHomeComponent{
    pageTitle:string = "Candidate home"
    _response:AuthenticateResponse={candidateId:'',candidateName:'',dob:'',email:'',password:'',role:'',yearsofExperience:0,candidateQualification:'',authenticated:false}
    _assessments:IAssessment[] = []
    isAssessmentSelected:boolean=false
    selectedAssessment:string=''
    errorMessage:string=''

    constructor(private _sharingService: SharingService, private _router:Router, private _candidateHomeService:CandidateHomeService){
        if(this._sharingService.sharedValue !== undefined){
            this._response = this._sharingService.sharedValue
        }
        if(this._response.authenticated === false && this._response.candidateId===""){
            this._router.navigate(["/candidate-login"])
        }
    }

    ngOnInit(){
        this._candidateHomeService.getAssessments(this._response.candidateId).subscribe(result=>this._assessments=result,error=>this.errorMessage=<any>error)
    }

    onSelected(assessment:IAssessment){
        this.isAssessmentSelected=true
        this.selectedAssessment=assessment.assessmentId
    }

    checkActiveAssessment(assessment:IAssessment):boolean{
        if(assessment.status==='PENDING'){
            return false;
        }
        return true;
    }

    start() {
        this._sharingService.sharedValue = [this._response,this.selectedAssessment]
        localStorage.setItem("assessmentId",JSON.stringify(this.selectedAssessment))
        localStorage.setItem("candidateId",JSON.stringify(this._response.candidateId))
        window.open('/assessment/'+this.selectedAssessment, '_blank', 'location=yes,height=800,width=1600,scrollbars=yes,status=yes')
      }

    logout(){
        this._router.navigate(["/candidate-login"])
    }
}