import { SharedModule } from "src/shared/shared.module";
import { SharingService } from "src/shared/shared.service";
import { NgModule } from "@angular/core";
import { CandidateRoutingModule } from "src/candidate-login/candidate-login-routing.module";
import { ScheduleAssessmentComponent } from "./schedule-assessment.component";
import { DatePipe } from "@angular/common";
import { ScheduleAssessmentService } from "./schedule-assessment.service";


@NgModule({
    imports : [
        SharedModule,
        CandidateRoutingModule,
    ],
    declarations : [
        ScheduleAssessmentComponent,
    ],
    providers : [
        SharingService,
        ScheduleAssessmentService,
        DatePipe
    ],
    exports : [
        ScheduleAssessmentComponent,
    ]
})
export class ScheduleAssessmentModule{
    
}