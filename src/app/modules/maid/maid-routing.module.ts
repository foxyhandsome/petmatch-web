import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaidListComponent } from './maid-list/maid-list.component';


const routes: Routes = [
  {
    path: '', component: MaidListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaidRoutingModule { }
