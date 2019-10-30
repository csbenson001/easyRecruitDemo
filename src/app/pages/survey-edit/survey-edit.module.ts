import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyEditComponent } from './survey-edit.component';
import { SurveyEditRoutingModule } from './survey-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SurveyEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SurveyEditComponent
  ]
})
export class SurveyEditModule { }
