import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DocumentEditComponent } from './document-edit.component';

const routes: Routes = [
  {
    path: '',
    component: DocumentEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentEditRoutingModule { }
