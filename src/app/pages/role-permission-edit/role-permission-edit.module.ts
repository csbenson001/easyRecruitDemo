import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolePermissionEditComponent } from './role-permission-edit.component';
import { RolePermissionEditRoutingModule } from './role-permission-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RolePermissionEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    RolePermissionEditComponent
  ]
})
export class RolePermissionEditModule { }
