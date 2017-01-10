import { IAuthor } from 'app/authors/author';

export interface IArticle {
    id: number,
    title: string,
    page: number,
    issue: string,
    publicationYear: number,
    isSupplement: string,
    hyperlink: string,
    authors: IAuthor[]
}