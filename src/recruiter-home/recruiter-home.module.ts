import { SharedModule } from "src/shared/shared.module";
import { RecruiterHomeComponent } from "./recruiter-home.component";
import { SharingService } from "src/shared/shared.service";
import { NgModule } from "@angular/core";
import { RecruiterHomeService } from "./recruiter-home.service";
import { CandidateRoutingModule } from "src/candidate-login/candidate-login-routing.module";
import { CandidateFilterPipe } from "./candidate-pipe";


@NgModule({
    imports : [
        SharedModule,
        CandidateRoutingModule,
    ],
    declarations : [
        RecruiterHomeComponent,
        CandidateFilterPipe
    ],
    providers : [
        RecruiterHomeService,
        SharingService
    ],
    exports : [
        RecruiterHomeComponent,
        CandidateFilterPipe
    ]
})
export class RecuiterHomeModule{
    
}