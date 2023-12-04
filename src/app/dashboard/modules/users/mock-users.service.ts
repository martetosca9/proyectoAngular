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
        age: 23,
        token: "fasdfa",
        role: "ADMIN",
        password: "123456"
      },
      {
        id: 2,
        name: 'alfonso',
        lastName: 'Burgos',
        email: 'martin@algo.com',
        age: 14,
        token: "12313",
        role: "ADMIN",
        password: "123456"
      }
    ];
  }
}
