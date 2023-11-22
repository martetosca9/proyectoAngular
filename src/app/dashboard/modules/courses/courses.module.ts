import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { SharedModule } from 'src/app/Shared/shared.module';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { MatDatepickerModule } from '@angular/material/datepicker';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesTableComponent,
    CoursesDialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatDatepickerModule
  ]
})
export class CoursesModule { }
