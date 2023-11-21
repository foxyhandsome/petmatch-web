import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/modules/main/main.component';
import { ManageUserComponent } from 'src/app/modules/manage-user/manage-user.component';
import { LayoutComponent } from './layout.component';
import { EditUserComponent } from 'src/app/modules/edit-user/edit-user.component';
import { CreateUserComponent } from 'src/app/modules/create-user/create-user.component';
import { ManagePetComponent } from 'src/app/modules/manage-pet/manage-pet.component';
import { EditPetComponent } from 'src/app/modules/edit-pet/edit-pet.component';
import { CreatePetComponent } from 'src/app/modules/create-pet/create-pet.component';
import { ViewReviewComponent } from 'src/app/modules/view-review/view-review.component';
import { EditReviewComponent } from 'src/app/modules/edit-review/edit-review.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'main', component: MainComponent, },
      { path: 'manage-user', component: ManageUserComponent},
      { path: 'edit-user', component: EditUserComponent },
      { path: 'create-user', component: CreateUserComponent},
      { path: 'manage-pet', component: ManagePetComponent},
      { path: 'edit-pet', component: EditPetComponent},
      { path: 'create-pet', component: CreatePetComponent},
      { path: 'view-review', component: ViewReviewComponent},
      { path: 'edit-review', component: EditReviewComponent},
      // { path: 'manage-review', component: ManageReviewComponent},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
