import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessFlowListComponent } from './process-flow-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProcessFlowListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessFlowListRoutingModule { }
