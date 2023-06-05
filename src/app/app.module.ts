import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidateLoginModule } from '../candidate-login/candidate-login.module';
import { CandidateHomeModule } from 'src/candidate-home/candidate-home.module';
import { CandidateRegisterModule } from 'src/candidate-register/candidate-register.module';
import { RecuiterHomeModule } from 'src/recruiter-home/recruiter-home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScheduleAssessmentModule } from 'src/schedule-assessment/schedule-assessment.module';

import { AssessmentModule } from 'src/assessment/assessment.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CandidateLoginModule,
    CandidateHomeModule,
    CandidateRegisterModule,
    RecuiterHomeModule,
    ScheduleAssessmentModule,
    AssessmentModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
