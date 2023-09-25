import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/authentication/login/login.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { AntDesignModule } from './common/ant-design.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IconDefinition } from '@ant-design/icons-angular';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { EditUserComponent } from './modules/edit-user/edit-user.component';
import { EditReviewComponent } from './modules/edit-review/edit-review.component';
import { ManageReviewComponent } from './modules/manage-review/manage-review.component';
import { ManagePetComponent } from './modules/manage-pet/manage-pet.component';
import { CreatePetComponent } from './modules/create-pet/create-pet.component';
import { EditPetComponent } from './modules/edit-pet/edit-pet.component';


const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(key => antDesignIcons[key])

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ManageReviewComponent,
    EditUserComponent,
    EditReviewComponent,
    ManageReviewComponent,
    ManagePetComponent,
    CreatePetComponent,
    EditPetComponent,
    
  ],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AntDesignModule
  ],
  
  providers: [{ provide: NZ_ICONS, useValue: icons }],
  bootstrap: [AppComponent]
})
export class AppModule { }
