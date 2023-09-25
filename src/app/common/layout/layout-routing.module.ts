import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/modules/main/main.component';
import { ManageUserComponent } from 'src/app/modules/manage-user/manage-user.component';
import { LayoutComponent } from './layout.component';
import { EditUserComponent } from 'src/app/modules/edit-user/edit-user.component';
import { ManageReviewComponent } from 'src/app/modules/manage-review/manage-review.component';
import { CreateUserComponent } from 'src/app/modules/create-user/create-user.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'main', component: MainComponent, },
      { path: 'manage-user', component: ManageUserComponent, },
      { path: 'edit-user', component: EditUserComponent },
      { path: 'manage-review', component: ManageReviewComponent},
      { path: 'create-user', component: CreateUserComponent}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
