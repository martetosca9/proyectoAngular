import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/Shared/shared.module';

describe('LoginComponent', () => {
  let loginComponent: LoginComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, SharedModule],
    });
    const fixture = TestBed.createComponent(LoginComponent);
    loginComponent = fixture.componentInstance;
  });

  it('should create login component', () => {
    expect(loginComponent).toBeTruthy();
  });

  it('Debe marcar todos los campos del formulario (touched) si este es invalido', () => {
    loginComponent.loginForm.patchValue({
      email: 'aaaaaa@123123123',
      password: '',
    });
    loginComponent.login();
    expect(loginComponent.emailControl.touched).toBeTrue();
    expect(loginComponent.passwordControl.touched).toBeTrue();
  });

  it('Debe llamar al metodo login del AuthService si el formulario es valido', () => {
    loginComponent.loginForm.patchValue({
      email: 'pruebaaaa231@mail.com',
      password: '123456',
    });

    const spyOnAuthServiceLogin = spyOn(
      (loginComponent as any).authService,
      'login'
    );

    loginComponent.login();

    expect(spyOnAuthServiceLogin).toHaveBeenCalled();
  });
});