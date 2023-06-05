import { NgModule } from "@angular/core";
import { SharedModule } from "src/shared/shared.module";
import { CandidateLoginComponent } from "./candidate-login.component";
import { CandidateRoutingModule } from "./candidate-login-routing.module";
import { SharingService } from "src/shared/shared.service";
import { CandidateLoginService } from "./candidate-login.service";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports : [
        SharedModule,
        CandidateRoutingModule
    ],
    declarations : [
        CandidateLoginComponent
    ],
    providers : [
        CandidateLoginService,
        SharingService
    ],
    exports : [
        CandidateLoginComponent
    ]
})
export class CandidateLoginModule{

}