import { Component, Input, OnInit } from '@angular/core';
import { IAuthor } from './author';
import { IEIndexService } from 'app/ieindex.service';

@Component({
    selector: 'ieindex-authors',
    templateUrl: 'app/authors/author-list.component.html'
})

export class AuthorListComponent implements OnInit {

    @Input() isUserInAdminMode: boolean;
    authorsExist: boolean;
    errorMessage: string;

    authors: IAuthor[] = [];

    constructor(private _ieIndexService: IEIndexService) {

    }

    ngOnInit(): void {
    
        this._ieIndexService.getAuthors()
            .subscribe(authors => {               
                this.authors = authors;
            }, error => this.errorMessage = <any>error);
    }

    ngAfterContentChecked(): void {    
         this.authorsExist = typeof this.authors != "undefined"
             && this.authors != null
             && this.authors.length != null
             && this.authors.length > 0;
    }
}