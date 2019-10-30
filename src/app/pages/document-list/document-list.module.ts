import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentListComponent } from './document-list.component';
import { DocumentListRoutingModule } from './document-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    DocumentListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    DocumentListComponent
  ]
})
export class DocumentListModule { }
