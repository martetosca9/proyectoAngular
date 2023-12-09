import { Component, OnDestroy } from '@angular/core';
import { User } from '../users/models';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnDestroy {
  //propiedad
  loading = false;

  clockSubscription: Subscription;

  constructor() {
    this.getUsers();
    this.clockSubscription = this.getClock().subscribe({
      next: (v) => {
        console.log(v)
      },
      error: (err) => {
        alert("ocurrió un error")
      },
      complete: () => {
        console.log("contador finalizado");
      }
    });

    this.getClock().subscribe({
      next: (v) => {
        console.log("segunda sub")
      }
    })
  }

  ngOnDestroy(): void {
    console.log("inicio destroy");
  }

  getClock(): Observable<number> {

    return new Observable((subscriber) => {

      let counter = 0;

      setInterval(() => {
        counter++;
        subscriber.next(counter);

        if (counter === 5) {
          subscriber.complete();
        }

      }, 1000);
    })
  }
  
  async getUsers(): Promise<void> {
    
    this.loading = true;

    const getUsersPromise = new Promise((resolve, reject) => {
    
      const users: User[] = [ //promise
        {
          id: 1,
          name: "testasync",
          lastName: "lastnameasync",
          email: "async@mail.com",
          age: 44,
          token: "llllask",
          role: "ADMIN",
          password: "123456"
        }
      ]

      setTimeout(() => {
        resolve([users]);
      }, 2500);

    });

    await getUsersPromise
    .then((res) => {
      console.log(res);
    })
    .catch((err => {
      alert("error inesperado"), console.log(err);
    }))
    .finally(() => {
      this.loading = false;
    });

  }
}
