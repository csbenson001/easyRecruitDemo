import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentEditComponent } from './document-edit.component';
import { DocumentEditRoutingModule } from './document-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DocumentEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    DocumentEditComponent
  ]
})
export class DocumentEditModule { }
