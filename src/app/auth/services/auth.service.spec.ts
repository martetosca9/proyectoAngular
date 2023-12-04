import { HttpClientTestingModule, HttpTestingController, } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';
import { User } from 'src/app/dashboard/modules/users/models';
import { environments } from 'src/environments/environments.local'; 
import { MockProvider } from 'ng-mocks';
import { Router } from '@angular/router';

fdescribe('AuthService', () => {
  let authService: AuthService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [MockProvider(Router)],
    });

    authService = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('AuthService should be defined', () => {
    expect(authService).toBeTruthy();
  });

  it('Se debe establecer un usuario autenticado al hacer login()', () => {
    const USER_MOCK: User = {
      name: "AdminName",
      lastName: "AdminLastname",
      email: "admin@admin.admin",
      age: 23,
      password: "admin",
      token: "jfkeiotpqlskdjmfu",
      role: "ADMIN",
      id: 0
    };

    authService.login({
      email: USER_MOCK.email,
      password: USER_MOCK.password,
    });

    httpController
      .expectOne({
        method: 'GET',
        url: `${environments.baseUrl}/users?email=${USER_MOCK.email}&password=${USER_MOCK.password}`,
      })
      .flush([USER_MOCK]);

    authService.authUser$.subscribe({
      next: (authUser) => {
        expect(authUser).toBeTruthy();
        expect(authUser).toEqual(USER_MOCK);
      },
    });
  });
});