import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobApplicationListComponent } from './job-application-list.component';
import { JobApplicationListRoutingModule } from './job-application-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    JobApplicationListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    JobApplicationListComponent
  ]
})
export class JobApplicationListModule { }
