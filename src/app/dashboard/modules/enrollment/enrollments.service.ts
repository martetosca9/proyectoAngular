// import { Injectable } from "@angular/core";
// import { Enrollments } from "./models";
// import { BehaviorSubject, Observable, of } from "rxjs";
// import { User } from "../users/models";
// import { Course } from "../courses/models";
// import { FormBuilder, FormGroup } from "@angular/forms";

// @Injectable({ providedIn: 'root' })
// export class EnrollmentsService {

//     private enrollmentsSubject = new BehaviorSubject<Enrollments[]>([]);
//     enrollments$ = this.enrollmentsSubject.asObservable();

//     users: User[] = [
//         {
//             id: 1,
//             name: "Martin",
//             lastName: "Toscanini",
//             email: "jumailan@example.com",
//             age: 23,
//             token: "aaaaa",
//             role: "ADMIN",
//             password: "123456"
//         },
//         {
//             id: 2,
//             name: "Maria",
//             lastName: "burgos",
//             email: "mail2@example.com",
//             age: 45,
//             token: "aaaab",
//             role: "ADMIN",
//             password: "123456"
//         },
//         {
//             id: 3,
//             name: "manuel",
//             lastName: "toscanini",
//             email: "luis@example.com",
//             age: 21,
//             token: "aaaac",
//             role: "ADMIN",
//             password: "123456"
//         },
//     ];

//     courses: Course[] = [
//         {
//             id: 1,
//             name: "HTML Course",
//             startDate: new Date("2023-01-01"),
//             endDate: new Date("2023-02-28"),
//         },
//         {
//             id: 2,
//             name: Javascript# Course",
//             startDate: new Date("2023-03-01"),
//             endDate: new Date("2023-04-30"),
//         },
//         {
//             id: 3,
//             name: "ReactJS Course",
//             startDate: new Date("2023-05-01"),
//             endDate: new Date("2023-06-30"),
//         },
//     ];

//     enrollments: Enrollments[] = [
//         {
//             id: 1,
//             userName: "Martin",
//             subscriptionTo: 'JavaScript',
//         },
//         {
//             id: 2,
//             userName: "Martin",
//             subscriptionTo: 'HTML#',
//         },
//         {
//             id: 3,
//             userName: "Martin",
//             subscriptionTo: 'ReactJS',
//         },
//     ];

//     constructor(private fb: FormBuilder) { }

//     getEnrollments$(): Observable<Enrollments[]> {
//         return of(this.enrollments);
//     }

//     getUsers$(): Observable<User[]> {
//         console.log(this.users)
//         return of(this.users);
//     }

//     getCourses$(): Observable<Course[]> {
//         console.log(this.courses)
//         return of(this.courses);
//     }

//     updateEnrollments(enrollments: Enrollments[]): void {
//         this.enrollmentsSubject.next(enrollments);
//     }

//     createEnrollment$(enrollment: Enrollments): Observable<Enrollments[]> {
//         this.enrollments.push(enrollment);
//         console.log(enrollment);
//         return of([...this.enrollments]);
//     }

//     createEnrollmentForUserAndCourse(userId: number, courseId: number): Observable<Enrollments[]> {
//         const user = this.users.find(u => u.id === userId);
//         const course = this.courses.find(c => c.id === courseId);
    
//         if (user && course) {
//             const existingEnrollment = this.enrollments.find(e => e.userName === `${user.name} ${user.lastName}` && e.subscriptionTo === course.name);
    
//             if (existingEnrollment) {
//                 return of([...this.enrollments]);
//             } else {
//                 const enrollment: Enrollments = {
//                     id: this.enrollments.length + 1,
//                     userName: `${user.name} ${user.lastName}`,
//                     subscriptionTo: course.name,
//                 };
//                 return this.createEnrollment$(enrollment);
//             }
//         }
    
//         return of([...this.enrollments]);
//     }

// }