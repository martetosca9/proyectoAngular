import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UsersService } from './users.service';
import { MockUsersService } from './mock-users.service';
import { ApiUrl } from 'src/app/config/url.token';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UsersDialogComponent, UsersComponent, UsersTableComponent, UserDetailComponent],
  imports: [SharedModule, CommonModule, RouterModule],
  exports: [UsersComponent],

  providers: [
    UsersService,
    {
      provide: UsersService,
      useClass: MockUsersService,
    },
    {
      provide: ApiUrl,
      useValue: {
        url: "http://localhost:43210/users"
      }
    }
  ],
})
export class UsersModule {}
