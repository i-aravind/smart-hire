import { NgModule } from "@angular/core";
import { SharedModule } from "src/shared/shared.module";
import { CandidateRoutingModule } from "src/candidate-login/candidate-login-routing.module";
import { SharingService } from "src/shared/shared.service";
import { CandidateHomeComponent } from "./candidate-home.component";
import { CandidateHomeService } from "./candidate-home.service";

@NgModule({
    imports : [
        SharedModule,
        CandidateRoutingModule,
    ],
    declarations : [
        CandidateHomeComponent
    ],
    providers : [
        CandidateHomeService,
        SharingService
    ],
    exports : [
        CandidateHomeComponent
    ]
})
export class CandidateHomeModule{
    
}