import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IArticle } from 'app/articles/article'
import { IAuthor } from 'app/authors/author';

@Injectable()
export class IEIndexService {

    private _authorUrl = 'api/authors/authors.json'; 
    test: Observable<IAuthor[]>;

    constructor(private _http: Http){}

    getArticles(): IArticle[] {
        return [{
            "id": 1,
            "title": "All-One Comprehensive Immigration Reform",
            "page": 6,
            "issue": "July/August",
            "publicationYear": 2013,
            "isSupplement": "No",
            "hyperlink": "/downloads/article.pdf",
            "authors": [
                {
                    "id": 1,
                    "firstName": "Stuart",
                    "middleName": null,
                    "lastName": "Anderson",
                    "suffix": null,
                    "articles": []
                }
            ]
        },
        {
            "id": 2,
            "title": "The Internationalization of U.S. Universities—Are We Making Progress?",
            "page": 52,
            "issue": "July/August",
            "publicationYear": 2010,
            "isSupplement": "No",
            "hyperlink": "/downloads/article.pdf",
            "authors": [
                {
                    "id": 2,
                    "firstName": "Sarah",
                    "middleName": "E.",
                    "lastName": "Dumont",
                    "suffix": null,
                    "articles": []
                },
                {
                    "id": 3,
                    "firstName": "Robert",
                    "middleName": "A.",
                    "lastName": "Pastor",
                    "suffix": null,
                    "articles": []
                }
            ]
        },
        {
            "id": 3,
            "title": "Designing an Interdisciplinary Short-Term Program in China",
            "page": 65,
            "issue": "March/April",
            "publicationYear": 2008,
            "isSupplement": "No",
            "hyperlink": "/downloads/article.pdf",
            "authors": [
                {
                    "id": 4,
                    "firstName": "Jacqueline",
                    "middleName": "S.",
                    "lastName": "McLaughlin",
                    "suffix": null,
                    "articles": []
                },
                {
                    "id": 5,
                    "firstName": "Nikolaos",
                    "middleName": null,
                    "lastName": "Tzafaras",
                    "suffix": null,
                    "articles": []
                },
                {
                    "id": 6,
                    "firstName": "John",
                    "middleName": null,
                    "lastName": "McCollough",
                    "suffix": null,
                    "articles": []
                }
            ]
        },
        {
            "id": 4,
            "title": "Deciphering Ambiguous Regulations",
            "page": 72,
            "issue": "March/April",
            "publicationYear": 2008,
            "isSupplement": "No",
            "hyperlink": "/downloads/article.pdf",
            "authors": [
                {
                    "id": 7,
                    "firstName": "Eric",
                    "middleName": null,
                    "lastName": "Kroetsch",
                    "suffix": null,
                    "articles": []
                },
                {
                    "id": 8,
                    "firstName": "Alisa",
                    "middleName": null,
                    "lastName": "Eland",
                    "suffix": null,
                    "articles": []
                }
            ]
        },
        {
            "id": 5,
            "title": "Limited Resources, Endless Possibilities",
            "page": 34,
            "issue": "March/April",
            "publicationYear": 2008,
            "isSupplement": "No",
            "hyperlink": "/downloads/article.pdf",
            "authors": [
                {
                    "id": 9,
                    "firstName": "Susan",
                    "middleName": null,
                    "lastName": "Ladika",
                    "suffix": null,
                    "articles": []
                }
            ]
        },
        {
            "id": 6,
            "title": "At Home on Three Continents",
            "page": 20,
            "issue": "March/April",
            "publicationYear": 2010,
            "isSupplement": "No",
            "hyperlink": "/downloads/article.pdf",
            "authors": [
                {
                    "id": 10,
                    "firstName": "Elaina",
                    "middleName": null,
                    "lastName": "Loveland",
                    "suffix": null,
                    "articles": []
                }
            ]
        },
        {
            "id": 7,
            "title": "International Students Are an Emerging Market for Study Abroad",
            "page": 6,
            "issue": "May/June",
            "publicationYear": 2010,
            "isSupplement": "No",
            "hyperlink": "/downloads/article.pdf",
            "authors": [
                {
                    "id": 11,
                    "firstName": "Greg",
                    "middleName": null,
                    "lastName": "Grassi",
                    "suffix": null,
                    "articles": []
                },
                {
                    "id": 12,
                    "firstName": "Kira",
                    "middleName": null,
                    "lastName": "Espiritu",
                    "suffix": null,
                    "articles": []
                }
            ]
        },
        {
            "id": 8,
            "title": "The First Globals Generation",
            "page": 20,
            "issue": "May/June",
            "publicationYear": 2010,
            "isSupplement": "No",
            "hyperlink": "/downloads/article.pdf",
            "authors": [
                {
                    "id": 10,
                    "firstName": "Elaina",
                    "middleName": null,
                    "lastName": "Loveland",
                    "suffix": null,
                    "articles": []
                }
            ]
        },
        {
            "id": 9,
            "title": "Instant Connections",
            "page": 46,
            "issue": "November/December",
            "publicationYear": 2009,
            "isSupplement": "No",
            "hyperlink": "/downloads/article.pdf",
            "authors": [
                {
                    "id": 13,
                    "firstName": "Mandy",
                    "middleName": null,
                    "lastName": "Reinig",
                    "suffix": null,
                    "articles": []
                },
                {
                    "id": 14,
                    "firstName": "Penny",
                    "middleName": null,
                    "lastName": "Schouten",
                    "suffix": null,
                    "articles": []
                }
            ]
        },
        {
            "id": 10,
            "title": "Women's Work",
            "page": 32,
            "issue": "September/October",
            "publicationYear": 2009,
            "isSupplement": "No",
            "hyperlink": "/downloads/article.pdf",
            "authors": [
                {
                    "id": 9,
                    "firstName": "Susan",
                    "middleName": null,
                    "lastName": "Ladika",
                    "suffix": null,
                    "articles": []
                }
            ]
        },
        {
            "id": 11,
            "title": "Championing Global Competence",
            "page": 12,
            "issue": "September/October",
            "publicationYear": 2010,
            "isSupplement": "No",
            "hyperlink": "/downloads/article.pdf",
            "authors": [
                {
                    "id": 10,
                    "firstName": "Elaina",
                    "middleName": null,
                    "lastName": "Loveland",
                    "suffix": null,
                    "articles": []
                }
            ]
        }];
    }

    getAuthors(): Observable<IAuthor[]> {
        return this._http.get(this._authorUrl)
        .map((response: Response) => <IAuthor[]>response.json())
        //.do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);       
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}