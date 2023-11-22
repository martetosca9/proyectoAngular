import { Component } from '@angular/core';
import { CoursesService } from './courses.services';
import { Observable } from 'rxjs';
import { Course } from './models';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable<Course[]>;

  constructor(
    private coursesService: CoursesService,
    private matDialog: MatDialog) {
    this.courses$ = this.coursesService.getCourses$();
  }

  addCourse(): void {
    this.matDialog.open(CoursesDialogComponent).afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.courses$ = this.coursesService.createCourse$({
            id: new Date().getTime(),
            name: res.name,
            startDate: new Date(),
            endDate: new Date()
          })
        }
      }
    });
  }
}
