import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { UsersComponent } from '../users/users.component';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
