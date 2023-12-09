import { Component, Input, OnInit } from '@angular/core';
import { Enrollments } from '../../models';
import { EnrollmentsService } from '../../enrollments.service';

@Component({
  selector: 'app-enrollments-table',
  templateUrl: './enrollments-table.component.html',
  styleUrls: ['./enrollments-table.component.scss'],
})
export class EnrollmentsTableComponent {
  displayedColumns = ['id', 'course', 'user',];

  enrollments$: Observable<Enrollments[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store) {
    this.enrollments$ = this.store.select(selectEnrollments);
    this.isLoading$ = this.store.select(selectEnrollmentsIsLoading);
  
    this.enrollments$.subscribe(data => console.log('Enrollments Data:', data));
  }
}
