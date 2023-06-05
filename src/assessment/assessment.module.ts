import { NgModule } from "@angular/core";
import { SharedModule } from "src/shared/shared.module";
import { CandidateRoutingModule } from "src/candidate-login/candidate-login-routing.module";
import { SharingService } from "src/shared/shared.service";
import { AssessmentComponent } from "./assessment.component";
import { AssessmentService } from "./assessment.service";

@NgModule({
    imports : [
        SharedModule,
        CandidateRoutingModule,
    ],
    declarations : [
        AssessmentComponent
    ],
    providers : [
        SharingService,
        AssessmentService
    ],
    exports : [
        AssessmentComponent
    ]
})
export class AssessmentModule{
    
}