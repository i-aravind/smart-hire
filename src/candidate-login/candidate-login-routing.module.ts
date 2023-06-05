import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CandidateLoginComponent } from "./candidate-login.component";
import { CandidateHomeComponent } from "src/candidate-home/candidate-home.component";
import { CandidateRegisterComponent } from "src/candidate-register/candidate-register.component";
import { RecruiterHomeComponent } from "src/recruiter-home/recruiter-home.component";
import { ScheduleAssessmentComponent } from "src/schedule-assessment/schedule-assessment.component";
import { AssessmentComponent } from "src/assessment/assessment.component";

@NgModule({
    imports : [
        RouterModule.forChild([
            {path:'candidate-login',component:CandidateLoginComponent},
            {path:'assessment/:assessmentId',component:AssessmentComponent},
            {path:'candidate-home/:user',component:CandidateHomeComponent},
            {path:'candidate-register',component:CandidateRegisterComponent},
            {path:'recruiter-home/:user',component:RecruiterHomeComponent},
            {path:'schedule-assessment/:user',component:ScheduleAssessmentComponent}
        ])
    ],
    
    exports : [
        RouterModule
    ]
})
export class CandidateRoutingModule{

}