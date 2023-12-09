import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Course } from "./models";

@Injectable({ providedIn: "root" })

export class CoursesService {

    courses: Course[] = [
        {
            id: 1,
            name: "Desarrollo Web",
            startDate: new Date(),
            endDate: new Date()
        },
        {
            id: 2,
            name: "Javascript",
            startDate: new Date(),
            endDate: new Date()
        },
        {
            id: 3,
            name: "ReactJS",
            startDate: new Date(),
            endDate: new Date()
        },
        {
            id: 4,
            name: "Desarrollo Backend",
            startDate: new Date(),
            endDate: new Date()
        },
    ];

    getCourses$(): Observable<Course[]> {
        return of(this.courses);
    }

    createCourse$(payload: Course): Observable<Course[]> {
        this.courses.push(payload);
        return of([...this.courses])
    }

    editCourse$(id: number, payload: Course): Observable<Course[]> {
        this.courses.push(payload);
        return of(
            this.courses.map((c) => (c.id === id ? { ...c, ...payload} : c))
        )
    }

    deleteCourse$(id: number): Observable<Course[]> {
        this.courses = this.courses.filter((c) => c.id !== id);
        return of(this.courses)
    }

    getCourseById$(id: number): Observable<Course | undefined> {
        return of(this.courses.find((c) => c.id === id));
    }
}