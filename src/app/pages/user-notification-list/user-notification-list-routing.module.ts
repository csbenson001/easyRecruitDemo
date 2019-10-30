import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserNotificationListComponent } from './user-notification-list.component';

const routes: Routes = [
  {
    path: '',
    component: UserNotificationListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserNotificationListRoutingModule { }
