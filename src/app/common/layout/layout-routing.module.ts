import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/modules/main/main.component';
import { ManageUserComponent } from 'src/app/modules/manage-user/manage-user.component';
import { LayoutComponent } from './layout.component';
import { EditUserComponent } from 'src/app/modules/edit-user/edit-user.component';
import { ReviewComponent } from 'src/app/modules/review/review.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'main', component: MainComponent, },
      { path: 'user-list', component: ManageUserComponent, },
      { path: 'edit-user', component: EditUserComponent },
      { path: 'review', component: ReviewComponent}

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
