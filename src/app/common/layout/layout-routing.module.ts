import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from 'src/app/modules/main/main.component';
import { ManageUserComponent } from 'src/app/modules/manage-user/manage-user.component';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'main', component: MainComponent, },
      // {
      //   path: 'main',
      //   loadChildren: () =>
      //     import('src/app/modules/main/main.module').then(
      //       (m) => m.MainModule
      //     ),
      // },
      { path: 'user-list', component: ManageUserComponent, },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
