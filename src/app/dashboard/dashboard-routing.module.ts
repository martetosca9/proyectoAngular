import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/home/home.component";
import { DashboardComponent } from "./dashboard.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent,
                children: [
                    {
                        path: 'home',
                        component: HomeComponent
                    },
                    {
                        path: 'courses',
                        loadChildren: () => import('./modules/courses/courses.module').then((m) => m.CoursesModule)
                    },
                    {
                        path: 'users',
                        loadChildren: () => import('./modules/users/users.module').then((m) => m.UsersModule)
                    },
                    {
                        path: 'enrollments',
                        loadChildren: () => import('./modules/enrollment/enrollment.module').then((m) => m.EnrollmentsModule)
                    },
                    {
                        path: '**',
                        redirectTo: 'home',
                    }
                ]
            },
        ])
    ],
    exports: [RouterModule],
})



export class DashboardRoutingModule { }