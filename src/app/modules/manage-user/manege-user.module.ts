import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { ManageUserComponent } from './manage-user.component';
import { NzGridModule } from 'ng-zorro-antd/grid';

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])


const routes: Routes = [
  { path: 'create-user', component: ManageUserComponent },
];

@NgModule({
  declarations: [
    ManageUserComponent
  ],
  imports: [
    [RouterModule.forChild(routes)],  
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NzCardModule,
    NzButtonModule,
    NzIconModule,
    NzGridModule,
  ],
  exports: [RouterModule],
})
export class ManageUserModule { }
