import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentsComponent } from './enrollments.component';
import { EnrollmentsTableComponent } from './components/enrollments-table/enrollments-table.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { EnrollmentDialogComponent } from './components/enrollment-dialog/enrollment-dialog.component';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';

@NgModule({
  declarations: [
    EnrollmentsComponent,
    EnrollmentsTableComponent,
    EnrollmentDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    EnrollmentsRoutingModule,
  ]
})
export class EnrollmentsModule { }
