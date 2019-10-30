import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNotificationListComponent } from './user-notification-list.component';
import { UserNotificationListRoutingModule } from './user-notification-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    UserNotificationListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    UserNotificationListComponent
  ]
})
export class UserNotificationListModule { }
