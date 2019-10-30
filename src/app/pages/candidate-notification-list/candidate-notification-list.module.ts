import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateNotificationListComponent } from './candidate-notification-list.component';
import { CandidateNotificationListRoutingModule } from './candidate-notification-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CandidateNotificationListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CandidateNotificationListComponent
  ]
})
export class CandidateNotificationListModule { }
