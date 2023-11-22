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
        console.log(this.courses)
        return of([...this.courses])
    }

}