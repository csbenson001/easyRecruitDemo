import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobApplicationEditComponent } from './job-application-edit.component';
import { JobApplicationEditRoutingModule } from './job-application-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    JobApplicationEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    JobApplicationEditComponent
  ]
})
export class JobApplicationEditModule { }
