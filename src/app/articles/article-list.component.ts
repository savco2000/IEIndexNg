import { Component } from '@angular/core'
import { IArticle } from './article'

@Component({
    selector: 'ieindex-articles',
    templateUrl: 'app/articles/article-list.component.html'
})

export class ArticleListComponent {
    articles: IArticle[] = [{
        "id": 1,
        "title": "All-One Comprehensive Immigration Reform",
        "page": 12,
        "issue": "Fall",
        "publicationYear": 2010,
        "isSupplement": "No",
        "hyperlink": "/downloads/ie_julaug13_frontlines.pdf"
    },
    {
        "id": 2,
        "title": "Agent Provocative",
        "page": 7,
        "issue": "Summer",
        "publicationYear": 2013,
        "isSupplement": "Yes",
        "hyperlink": "/downloads/ie_julaug13_frontlines.pdf"
    },
    {
        "id": 3,
        "title": "Service Learning in Tanzania",
        "page": 19,
        "issue": "Winter",
        "publicationYear": 2015,
        "isSupplement": "No",
        "hyperlink": "/downloads/ie_julaug13_frontlines.pdf"
    }];
}