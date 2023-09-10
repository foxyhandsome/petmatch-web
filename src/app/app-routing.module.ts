
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/authentication/login/login.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  { path: 'login', component: LoginComponent },
  {
    path: '',
    loadChildren: () =>
      import('src/app/common/layout/layout.module').then(
        (m) => m.LayoutModule
      ),
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload' }),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
