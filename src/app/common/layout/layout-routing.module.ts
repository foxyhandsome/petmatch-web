import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      
      {
        path: 'main',
        loadChildren: () =>
          import('src/app/modules/main/main.module').then(
            (m) => m.MainModule
          ),
      },
      {
        path: 'manage-user',
        loadChildren:() =>
          import('src/app/modules/manage-user/manege-user.module').then(
            (m) => m.ManageUserModule
          )
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
