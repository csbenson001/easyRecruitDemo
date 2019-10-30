import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessFlowEditComponent } from './process-flow-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProcessFlowEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessFlowEditRoutingModule { }
