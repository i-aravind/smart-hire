import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { IAssessment } from "src/candidate-home/IAssessment";
import { IRecruiter } from "src/candidate-login/IRecruiter";
import { ICandidateView } from "src/recruiter-home/IcandidateView";
import { SharingService } from "src/shared/shared.service";
import {DatePipe, formatDate} from '@angular/common';
import { ScheduleAssessmentService } from "./schedule-assessment.service";

@Component({
    selector:'schedule-assessment',
    templateUrl: 'schedule-assessment.component.html',
    styleUrls: ['schedule-assessment.component.css']
})
export class ScheduleAssessmentComponent{
    pageTitle:string = 'schedule-assessment'
    _recruiter_response:IRecruiter = {recruiterId:'',recruiterName:'',recruiterEmail:'',password:'',errorMsg:'',authenticated:false}
    _candidate:ICandidateView = {candidateId: "",candidateName: "",candidateEmail: "",candidateRole: "",candidateExperince: "",candidateQualification: "",assessmentStatus: "",candidateStatus: "",score:''}
    currentDate:Date = new Date();
    _assessment:IAssessment = {candidateId: '',assessmentId: "",assessmentName: "",assignedDate: "",expiryDate: "",status: "",recruiterEmail: ""}
    assessments:string[]=['Java Developer','Big Data Developer','Linux Admin','Agile Developer']

    constructor(private _sharingService: SharingService, private _router:Router,public datepipe:DatePipe, private _scheduleService:ScheduleAssessmentService){
        if(this._sharingService.sharedValue !== undefined){
            this._recruiter_response = this._sharingService.sharedValue[0]
            this._candidate = this._sharingService.sharedValue[1]
        }
        if(this._recruiter_response.authenticated === false && this._recruiter_response.recruiterId===""){
            this._router.navigate(["/candidate-login"])
        }
    }

    submit(){
        if(confirm("Are you sure to schedule "+this._assessment.assessmentName+" assessment to "+this._candidate.candidateName)) {
            this._assessment.candidateId = this._candidate.candidateId
            this._assessment.recruiterEmail = this._recruiter_response.recruiterEmail
            let current_date = this.datepipe.transform(this.currentDate, 'yyyy-MM-dd')
            this._assessment.assignedDate = current_date!==null?current_date:'';
            this._assessment.status = 'PENDING'

            this._scheduleService.getScheduleAssessmentResponse(this._assessment).subscribe(resp=>{
                if(resp){
                    window.alert("Successfully scheduled assessment "+this._assessment.assessmentName+" for "+this._candidate.candidateName)
                    this.back()
                }else{
                    window.alert("Some error occured..Unsuccessful")
                }                
              })
        }
    }

    revoke(candidate:ICandidateView){
        if(confirm("Are you sure to revoke")) {
            this._assessment.candidateId = this._candidate.candidateId
            this._assessment.assessmentName = this._candidate.candidateRole
            this._scheduleService.revokeAssessment(this._assessment).subscribe(resp=>{
                if(resp){
                    window.alert("Assessment Revoked successfully")
                    this.back()
                }else{
                    window.alert("Some error occured..Unsuccessful")
                }                
              })
        }
    }

    back(){
        this._sharingService.sharedValue=this._recruiter_response
        this._router.navigate(["/recruiter-home",this._recruiter_response.recruiterId])
    }

    
}