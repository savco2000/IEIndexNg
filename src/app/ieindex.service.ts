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
    test: Observable<IAuthor[]>;

    constructor(private _http: Http) { }

    getArticles(): Observable<IArticle[]> {
        return this._http.get(this._articleUrl)
            .map((response: Response) => <IArticle[]>response.json())
            //.do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getAuthors(): Observable<IAuthor[]> {
        return this._http.get(this._authorUrl)
            .map((response: Response) => <IAuthor[]>response.json())
            //.do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}