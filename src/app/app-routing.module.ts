import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './dashboard/modules/home/home.component';
import { UsersComponent } from './dashboard/modules/users/users.component';
import { UserDetailComponent } from './dashboard/modules/users/components/user-detail/user-detail.component';
import { CoursesComponent } from './dashboard/modules/courses/courses.component';

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "users",
        component: UsersComponent,
      },
      {
        path: "courses",
        component: CoursesComponent
      },
      {
        path: "users/detail/:id",
        component: UserDetailComponent
      },
      {
        path: "**",
        redirectTo: "auth"
      }
    ]
  },
  {
    path: "auth",
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
