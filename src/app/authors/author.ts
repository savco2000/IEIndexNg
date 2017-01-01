import { IArticle } from 'app/articles/article'

export interface IAuthor {
    id: number,
    firstName: string,
    middleName: string,
    lastName: string,    
    suffix: string,
    articles: IArticle[]
}