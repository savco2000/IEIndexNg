import { Component, Input, OnInit } from '@angular/core';
import { IArticle } from './article';
import { IEIndexService } from 'app/ieindex.service';

@Component({
    selector: 'ieindex-articles',
    templateUrl: 'app/articles/article-list.component.html'
})

export class ArticleListComponent implements OnInit {
    @Input() isUserInAdminMode: boolean;

    articles: IArticle[];
    articlesExist: boolean;

    constructor(private _ieIndexService: IEIndexService) {

    }

    ngOnInit(): void {
        this.articles = this._ieIndexService.getArticles();

        this.articlesExist =
            typeof this.articles != "undefined"
            && this.articles != null
            && this.articles.length != null
            && this.articles.length > 0;
    }
}