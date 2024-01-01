import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ArticleModel } from '../models/Article';


@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  private article = new BehaviorSubject<any[]>([]);
articles$ = this.article.asObservable();
  constructor() { }

  getArticles(): Observable<ArticleModel[]> { 
    return this.articles$;
  };

  changeQuantity(articleID: number, chagenInQuantity: number): Observable<ArticleModel> {
    const currentProducts = this.article.getValue();
    const updatedProducts = currentProducts.map(product => {
      if (product.id === articleID) {
        return { ...product, quantity: product.quantity + chagenInQuantity };
      }
      return product;
    });
    this.article.next(updatedProducts);

    // Encuentra el artículo actualizado y devuelve un Observable de él
    const updatedArticle = updatedProducts.find(product => product.id === articleID);
    return updatedArticle ? new BehaviorSubject<ArticleModel>(updatedArticle).asObservable() : throwError(new Error('Article not found'));
  }

  create(article: ArticleModel): Observable<ArticleModel> {
    const currentArticles = this.article.getValue();
    this.article.next([...currentArticles, article]);
    
    // Devolver un Observable del artículo añadido
    return new BehaviorSubject<ArticleModel>(article).asObservable();
  }

}
