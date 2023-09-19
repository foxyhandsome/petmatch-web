import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageUserComponent } from './manage-user.component';


const routes: Routes = [
  {
    path: '', // เส้นทางหลักของหน้า "manage-user"
    component: ManageUserComponent, // กำหนดคอมโพเนนต์ที่ต้องการแสดง
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageUserRoutingModule { }
