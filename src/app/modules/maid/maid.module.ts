import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { MaidListComponent } from './maid-list/maid-list.component';
import { MaidRoutingModule } from './maid-routing.module';

@NgModule({
  declarations: [
    MaidListComponent,
  ],
  imports: [
    CommonModule,
    MaidRoutingModule,
  ]
})
export class MaidModule { }
