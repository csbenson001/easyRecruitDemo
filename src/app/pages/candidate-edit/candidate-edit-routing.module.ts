import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateEditComponent } from './candidate-edit.component';

const routes: Routes = [
  {
    path: '',
    component: CandidateEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateEditRoutingModule { }
