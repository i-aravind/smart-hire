import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
    imports : [
        RouterModule.forRoot([
            {path:'',redirectTo:'candidate-login',pathMatch:'full'},
            {path:'**',redirectTo:'candidate-login',pathMatch:'full'}
          ]),
    ],

    exports : [
        RouterModule
    ]
})
export class AppRoutingModule{

}