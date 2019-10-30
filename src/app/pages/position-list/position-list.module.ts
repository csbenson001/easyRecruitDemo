import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionListComponent } from './position-list.component';
import { PositionListRoutingModule } from './position-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PositionListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    PositionListComponent
  ]
})
export class PositionListModule { }
