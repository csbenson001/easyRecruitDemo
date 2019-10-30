import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolePermissionListComponent } from './role-permission-list.component';
import { RolePermissionListRoutingModule } from './role-permission-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RolePermissionListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    RolePermissionListComponent
  ]
})
export class RolePermissionListModule { }
