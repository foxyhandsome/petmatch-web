import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/modules/main/main.component';
import { ManageUserComponent } from 'src/app/modules/manage-user/manage-user.component';
import { LayoutComponent } from './layout.component';
import { EditUserComponent } from 'src/app/modules/edit-user/edit-user.component';
import { CreateUserComponent } from 'src/app/modules/create-user/create-user.component';
import { EditPetComponent } from 'src/app/modules/edit-pet/edit-pet.component';
import { CreatePetComponent } from 'src/app/modules/create-pet/create-pet.component';
import { ViewReviewComponent } from 'src/app/modules/view-review/view-review.component';
import { ViewPetComponent } from 'src/app/modules/view-pet/view-pet.component';
import { ViewMatchComponent } from 'src/app/modules/view-match/view-match.component';
import { ViewDetailMatchComponent } from 'src/app/modules/view-detail-match/view-detail-match.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'main', component: MainComponent, },
      { path: 'manage-user', component: ManageUserComponent},
      { path: 'edit-user', component: EditUserComponent },
      { path: 'create-user', component: CreateUserComponent},

      { path: 'edit-pet', component: EditPetComponent},
      { path: 'create-pet', component: CreatePetComponent},
      { path: 'view-pet', component: ViewPetComponent},

      { path: 'view-review', component: ViewReviewComponent},

      { path: 'view-match', component: ViewMatchComponent},

      { path: 'view-detail-match', component: ViewDetailMatchComponent},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
