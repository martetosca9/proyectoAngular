import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { User } from './models';

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

  users: User[] = [
    {
      id: 1,
      name: 'martin',
      lastName: 'toscanini',
      email: 'martin@algo.com',
    },
    {
      id: 2,
      name: 'alfonso',
      lastName: 'Burgos',
      email: 'martin@algo.com',
    },
    {
      id: 3,
      name: 'walter',
      lastName: 'apellidotres',
      email: 'walter@walter.water'
    }
  ]

  constructor (private matDialog: MatDialog) {}
    openUsersDialog(): void {
      this.matDialog.open(UsersDialogComponent).afterClosed().subscribe({
        next: (v) => {
          console.log("Value: ",v);
          if (!!v) {
            this.userName = v;
          }
        }
      });
    }
}
