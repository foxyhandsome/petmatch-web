import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NzTableModule } from 'ng-zorro-antd/table';
import { ReportproblemComponent } from './reportproblem/reportproblem.component';


const routes: Routes = [
  { path: 'reportproblem', component: ReportproblemComponent },
];

@NgModule({
  declarations: [
    ReportproblemComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NzTableModule
  ],
  exports: [RouterModule],
})
export class ReportmaidModule { }
