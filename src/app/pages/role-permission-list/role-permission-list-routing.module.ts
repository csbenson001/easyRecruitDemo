import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RolePermissionListComponent } from './role-permission-list.component';

const routes: Routes = [
  {
    path: '',
    component: RolePermissionListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolePermissionListRoutingModule { }
