import { Injectable } from '@angular/core';
import { User } from './models';
import { ApiUrl } from 'src/app/config/url.token';
import { ApiUrlConfig } from 'src/app/config/url.token'
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class UsersService {
  constructor(
    @Inject(ApiUrl)
    private url: ApiUrlConfig
  ) {}

  getUsers(): User[] {
    return [
      // {
      //   id: 1,
      //   name: 'martin',
      //   lastName: 'toscanini',
      //   email: 'martin@algo.com',
      // },
      // {
      //   id: 2,
      //   name: 'alfonso',
      //   lastName: 'Burgos',
      //   email: 'martin@algo.com',
      // },
      // {
      //   id: 3,
      //   name: 'walter',
      //   lastName: 'apellidotres',
      //   email: 'walter@walter.walter',
      // }
    ];
  }
}
