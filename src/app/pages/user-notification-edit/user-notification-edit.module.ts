import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNotificationEditComponent } from './user-notification-edit.component';
import { UserNotificationEditRoutingModule } from './user-notification-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    UserNotificationEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    UserNotificationEditComponent
  ]
})
export class UserNotificationEditModule { }
