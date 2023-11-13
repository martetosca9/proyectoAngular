import { Injectable } from '@angular/core';
import { User } from './models';
import { ApiUrl } from 'src/app/config/url.token';
import { ApiUrlConfig } from 'src/app/config/url.token'
import { Inject } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

export interface userAsync {
  id: number;
  name: string;
  lastName: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})

export class UsersService {
  constructor(
    @Inject(ApiUrl)
    private url: ApiUrlConfig
  ) {}


  getUsers(): Observable<userAsync[]> {
    return new Observable((subscriber) => {
      subscriber.next([
        {
          id: 1,
          name: 'martinASYNC',
          lastName: 'toscanini',
          email: 'martin@algo.com',
        },
        {
          id: 2,
          name: 'alfonsoASYNC ',
          lastName: 'Burgos',
          email: 'martin@algo.com',
        }
      ])
    })
  }
}
