import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PositionEditComponent } from './position-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PositionEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PositionEditRoutingModule { }
