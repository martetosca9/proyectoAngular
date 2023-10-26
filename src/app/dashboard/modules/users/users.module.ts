import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';



@NgModule({
  declarations: [
    
  
    UsersDialogComponent
  ],
  imports: [
    SharedModule,
  ]
})
export class UsersModule { }
