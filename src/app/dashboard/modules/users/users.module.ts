import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { UsersTableComponent } from './components/users-table/users-table.component';



@NgModule({
  declarations: [
    UsersDialogComponent,
    UsersComponent,
    UsersTableComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
