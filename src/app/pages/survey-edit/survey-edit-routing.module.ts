import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SurveyEditComponent } from './survey-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SurveyEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SurveyEditRoutingModule { }
