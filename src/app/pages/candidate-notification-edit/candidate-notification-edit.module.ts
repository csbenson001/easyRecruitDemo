import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateNotificationEditComponent } from './candidate-notification-edit.component';
import { CandidateNotificationEditRoutingModule } from './candidate-notification-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CandidateNotificationEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CandidateNotificationEditComponent
  ]
})
export class CandidateNotificationEditModule { }
