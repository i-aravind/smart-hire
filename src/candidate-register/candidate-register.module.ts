import { CandidateRoutingModule } from "src/candidate-login/candidate-login-routing.module";
import { SharedModule } from "src/shared/shared.module";
import { SharingService } from "src/shared/shared.service";
import { CandidateRegisterComponent } from "./candidate-register.component";
import { CandidateRegisterService } from "./candidate-register.service";
import { NgModule } from "@angular/core";

@NgModule({
    imports : [
        SharedModule,
        CandidateRoutingModule
    ],
    declarations : [
        CandidateRegisterComponent
    ],
    providers : [
        CandidateRegisterService,
        SharingService
    ],
    exports : [
        CandidateRegisterComponent
    ]
})
export class CandidateRegisterModule{

}