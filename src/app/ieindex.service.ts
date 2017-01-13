import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IArticle } from 'app/articles/article';
import { IAuthor } from 'app/authors/author';

@Injectable()
export class IEIndexService {

    private _authorUrl = 'api/authors/authors.json';
    private _articleUrl = 'api/articles/articles.json';   

    authors: IAuthor[];
    articles: IArticle[];
    errorMessage: string;

    constructor(private _http: Http) { }

    getAuthors(): void {
        this._http.get(this._authorUrl)
            .map((response: Response) => <IAuthor[]>response.json())            
            .catch(this.handleError)
            .subscribe(authors => this.authors = authors, error => this.errorMessage = <any>error);        
    }

    getArticles(): void {
        this._http.get(this._articleUrl)
            .map((response: Response) => <IArticle[]>response.json())            
            .catch(this.handleError)
            .subscribe(articles => this.articles = articles, error => this.errorMessage = <any>error);    
    }

    getAuthorArticles(id: number): void {
        var url = `api/authors/${id}/articles.json`;
        this._http.get(url)
            .map((response: Response) => <IArticle[]>response.json())            
            .catch(this.handleError)
            .subscribe(articles => this.articles = articles, error => this.errorMessage = <any>error);    
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}