import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateSurveyListComponent } from './candidate-survey-list.component';
import { CandidateSurveyListRoutingModule } from './candidate-survey-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CandidateSurveyListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CandidateSurveyListComponent
  ]
})
export class CandidateSurveyListModule { }
