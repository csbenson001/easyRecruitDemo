import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessFlowEditComponent } from './process-flow-edit.component';
import { ProcessFlowEditRoutingModule } from './process-flow-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ProcessFlowEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProcessFlowEditComponent
  ]
})
export class ProcessFlowEditModule { }
