import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateEditComponent } from './candidate-edit.component';
import { CandidateEditRoutingModule } from './candidate-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CandidateEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CandidateEditComponent
  ]
})
export class CandidateEditModule { }
