import { Component } from '@angular/core'
import { IAuthor } from './author'

@Component({
    selector: 'ieindex-authors',
    templateUrl: 'app/authors/author-list.component.html'
})

export class AuthorListComponent {
    authors: IAuthor[] = [
        {
            "id": 1,
            "firstName": "Stuart",
            "lastName": "Anderson",            
            "suffix": "II",
            "fullName": "Stuart Anderson II"
        },
        {
            "id": 2,
            "firstName": "Susan",
            "lastName": "Ladika",
            "suffix": null,
            "fullName": "Susan Ladika"
        },
        {
            "id": 3,
            "firstName": "Elaina",
            "lastName": "Loveland",
            "suffix": null,
            "fullName": "Elaina Loveland"
        }
    ];
}