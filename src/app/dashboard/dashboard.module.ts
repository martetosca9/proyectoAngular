import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule as formulario } from './modules/forms/forms.module';
import { UsersModule } from './modules/users/users.module';
import { UsersComponent } from './modules/users/users.component';
import { SharedModule } from '../Shared/shared.module';
import { HomeModule } from './modules/home/home.module';
import { RouterModule, Routes } from '@angular/router';




@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    formulario,
    UsersModule,
    SharedModule,
    HomeModule,
    RouterModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
