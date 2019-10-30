import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateNotificationListComponent } from './candidate-notification-list.component';

const routes: Routes = [
  {
    path: '',
    component: CandidateNotificationListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateNotificationListRoutingModule { }
