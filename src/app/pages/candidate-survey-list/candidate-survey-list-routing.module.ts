import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateSurveyListComponent } from './candidate-survey-list.component';

const routes: Routes = [
  {
    path: '',
    component: CandidateSurveyListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateSurveyListRoutingModule { }
