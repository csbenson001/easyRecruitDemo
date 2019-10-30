import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessFlowListComponent } from './process-flow-list.component';
import { ProcessFlowListRoutingModule } from './process-flow-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ProcessFlowListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProcessFlowListComponent
  ]
})
export class ProcessFlowListModule { }
