import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserAddComponent } from './user-add/user-add.component';
import { NzTableModule } from 'ng-zorro-antd/table';


const routes: Routes = [
  { path: 'user-list', component: UserListComponent },
  { path: 'user-add', component: UserAddComponent },
];

@NgModule({
  declarations: [
    UserListComponent,
    UserAddComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NzTableModule
  ],
  exports: [RouterModule],
})
export class UserManagementModule { }
