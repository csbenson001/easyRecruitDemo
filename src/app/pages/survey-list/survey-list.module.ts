import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyListComponent } from './survey-list.component';
import { SurveyListRoutingModule } from './survey-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SurveyListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    SurveyListComponent
  ]
})
export class SurveyListModule { }
