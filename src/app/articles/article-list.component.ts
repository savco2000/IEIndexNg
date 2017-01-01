import { Component, Input } from '@angular/core'
import { IArticle } from './article'

@Component({
    selector: 'ieindex-articles',
    templateUrl: 'app/articles/article-list.component.html'
})

export class ArticleListComponent {
    @Input() isUserInAdminMode: boolean;

    articles: IArticle[] = [{
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

    articlesExist: boolean =
        typeof this.articles != "undefined"
        && this.articles != null
        && this.articles.length != null
        && this.articles.length > 0;
}