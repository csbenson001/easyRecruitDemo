import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionEditComponent } from './position-edit.component';
import { PositionEditRoutingModule } from './position-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PositionEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PositionEditComponent
  ]
})
export class PositionEditModule { }
