import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateSurveyEditComponent } from './candidate-survey-edit.component';
import { CandidateSurveyEditRoutingModule } from './candidate-survey-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CandidateSurveyEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CandidateSurveyEditComponent
  ]
})
export class CandidateSurveyEditModule { }
