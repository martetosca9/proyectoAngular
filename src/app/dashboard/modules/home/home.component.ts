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
          email: "async@mail.com"
        }
      ]

      setTimeout(() => {
        resolve([users]);
      }, 2500);

    });

    //frena antes de resolver (espera los 2seg)
    await getUsersPromise
    //si no hay errores:
    .then((res) => {
      console.log(res);
    })
    //si hay un error:
    .catch((err => {
      alert("error inesperado"), console.log(err);
    }))
    //se usa siempre
    .finally(() => {
      this.loading = false;
    });

  }
}
