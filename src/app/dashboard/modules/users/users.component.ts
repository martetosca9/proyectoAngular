import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { User } from './models';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent {

  userName = "";

  // testUser: User = {
  //   name: "nombreaa",
  //   lastName: "apellidoaa",
  //   email: "mail1@asdasd"
  // }

  users: User[] = []

  constructor (
    private matDialog: MatDialog,
    private UsersService: UsersService
    ) {
      this.users = this.UsersService.getUsers();
    }
    openUsersDialog(): void {
      this.matDialog.open(UsersDialogComponent).afterClosed().subscribe({
        next: (v) => {

          if (!!v) {
            this.users = [
              ...this.users,
              {
                    ...v,
                id: new Date().getTime()
              }
            ]
          }
        }
      });
    }

    onEditUser(user: User): void {
      this.matDialog.open(UsersDialogComponent, {
        data: user,
      });
    }

    onDeleteUser(userId: number): void{
      if (confirm("Eliminar usuario?")){
      this.users = this.users.filter((u) => u.id !== userId);
      }
    }
}
