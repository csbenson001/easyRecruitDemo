import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserNotificationEditComponent } from './user-notification-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UserNotificationEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserNotificationEditRoutingModule { }
