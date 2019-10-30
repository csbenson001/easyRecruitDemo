import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateListComponent } from './candidate-list.component';
import { CandidateListRoutingModule } from './candidate-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CandidateListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CandidateListComponent
  ]
})
export class CandidateListModule { }
