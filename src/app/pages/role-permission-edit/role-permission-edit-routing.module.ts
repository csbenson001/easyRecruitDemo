import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolePermissionEditComponent } from './role-permission-edit.component';

const routes: Routes = [
  {
    path: '',
    component: RolePermissionEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolePermissionEditRoutingModule { }
