import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateSurveyEditComponent } from './candidate-survey-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CandidateSurveyEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateSurveyEditRoutingModule { }
