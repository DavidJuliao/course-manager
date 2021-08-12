import { Component, OnInit } from "@angular/core";
import { Course } from './course';

@Component({
    selector:'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CouseListComponent implements OnInit{
    courses: Course[] = [];

    ngOnInit():void{
        this.courses = [
            {   
                id: 1,
                name: 'Angular',
                imageUrl : '',
                price: 99.99,
                code: 'xps-8796',
                duration: 120,
                rating: 5.4,
                releaseDate: 'December, 2 , 2019'
            },
            {   
                id: 2,
                name: 'Typescript',
                imageUrl : '',
                price: 99.99,
                code: 'xps-7750',
                duration: 60,
                rating: 3.5,
                releaseDate: 'november, 4 , 2019'
            }
        ]
    }
}