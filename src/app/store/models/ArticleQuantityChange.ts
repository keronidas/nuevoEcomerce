import { ArticleModel } from './Article';

export interface ArticleQuantityChange {
    articulo: ArticleModel;
    cantidad: number;
}