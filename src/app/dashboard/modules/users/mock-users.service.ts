import { Injectable } from '@angular/core';
import { User } from './models';

@Injectable({
  providedIn: 'root',
})
export class MockUsersService {
  constructor() {}

  getUsers(): User[] {
    console.log("mock data")
    return [
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
        email: 'walter@walter.walter',
      },
    ];
  }
}
