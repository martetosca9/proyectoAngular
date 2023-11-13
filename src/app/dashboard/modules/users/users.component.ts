import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { User } from './models';
import { UsersService, userAsync } from './users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {

  users$: Observable<userAsync[]>;

  constructor (private usersService: UsersService) {

    this.users$ = this.usersService.getUsers();
  


    // private matDialog: MatDialog,

    // private usersService: UsersService ) {
    //   this.usersService.getUsers().subscribe({
    //     next: (v) => {
    //       console.log(v);
    //       this.users = v;
    //     },
    //     error: (err) => {},
    //     complete: () => {}
    //   })
    // }

    // private UsersService: UsersService
    // ) {
    //   this.users = this.UsersService.getUsers();
    // }
    // openUsersDialog(): void {
    //   this.matDialog.open(UsersDialogComponent).afterClosed().subscribe({
    //     next: (v) => {

    //       if (!!v) {
    //         this.users = [
    //           ...this.users,
    //           {
    //                 ...v,
    //             id: new Date().getTime()
    //           }
    //         ]
    //       }
    //     }
    //   });
    // }

    // onEditUser(user: User): void {
    //   this.matDialog.open(UsersDialogComponent, {
    //     data: user,
    //   });
    // }

    // onDeleteUser(userId: number): void{
    //   if (confirm("Eliminar usuario?")){
    //   this.users = this.users.filter((u) => u.id !== userId);
    //   }
    // }
  }
}
