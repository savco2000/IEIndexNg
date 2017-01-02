import { Component, Input, OnInit } from '@angular/core'
import { IAuthor } from './author'
import { IEIndexService } from 'app/ieindex.service';

@Component({
    selector: 'ieindex-authors',
    templateUrl: 'app/authors/author-list.component.html'
})

export class AuthorListComponent implements OnInit {

    @Input() isUserInAdminMode: boolean;
    authors: IAuthor[];
    authorsExist: boolean;

    constructor(private _ieIndexService: IEIndexService) {

    }

    ngOnInit(): void {
        this.authors = this._ieIndexService.getAuthors();

        this.authorsExist = typeof this.authors != "undefined"
            && this.authors != null
            && this.authors.length != null
            && this.authors.length > 0;
    }
}