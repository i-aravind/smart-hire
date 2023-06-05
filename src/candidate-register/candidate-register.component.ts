import { Component } from "@angular/core";
import { ICandidate } from "src/candidate-login/ICandidate";
import { SharingService } from "src/shared/shared.service";
import { CandidateRegisterService } from "./candidate-register.service";
import { Router } from "@angular/router";

@Component({
    selector: 'candidate-register',
    templateUrl: 'candidate-register.component.html',
    styleUrls: ['candidate-register.component.css']
})
export class CandidateRegisterComponent{
    pageTitle:string = 'Candidate Registration'
    currentDate:Date = new Date();
    _candidate:ICandidate = {candidateId:'',candidateName:'',dob:'',email:'',password:'',role:'',yearsofExperience:0,candidateQualification:'', errorMsg:''}
    confirmPassword:string = ''
    qualifications:string[]=['B.E','B.TECH','M.E','M.TECH','BCA','MCA','MBA','MS','BSC','MSC','B.ARCH','B.COM','M.COM']
    roles:string[]=['Java Developer','Python Developer','.Net Developer','Big Data Developer','PL/SQL Developer', 'Springboot Devloper','Linux Admin','HR','Selenium Tester','Manual Tester','Agile Developer']

    constructor(private _sharingService: SharingService,private _customerLoginService:CandidateRegisterService, private _router:Router){
    }

    qualChanged(qual:string){

    }
    
    register(){
        if(this.confirmPassword !== this._candidate.password){
            window.alert('Passwords do not match')
        }else{
            this._customerLoginService.getCreateCandidateResponse(this._candidate).subscribe(resp=>{
                this._candidate = resp
                this._candidate.errorMsg==null? window.alert("Candidate Reference : "+this._candidate.candidateId) : window.alert(this._candidate.errorMsg)
                this._router.navigate(["/candidate-login"])
              })
        }
    }

    back(){
        this._router.navigate(["/candidate-login"])
    }
}
