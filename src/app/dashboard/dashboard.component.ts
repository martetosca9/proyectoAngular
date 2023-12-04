import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  showFiller = false;

  constructor(private authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
