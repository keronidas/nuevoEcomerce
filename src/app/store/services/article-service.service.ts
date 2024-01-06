import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ArticleModel } from '../models/Article';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {
  private apiUrl:string= 'http://localhost:3000/api/articles';
  private article = new BehaviorSubject<any[]>([]);
  articles$ = this.article.asObservable();
  constructor(private http:HttpClient) { }

  getArticles(query?:string): Observable<ArticleModel[]> {
    const url = query ? `${this.apiUrl}?q=${query}` : this.apiUrl;
    return this.http.get<ArticleModel[]>(url);
  }

  changeArticleQuantity(id: number, changeInQuantity: number): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, { changeInQuantity });
  }

  createArticle(article: ArticleModel): Observable<ArticleModel> {
    console.log(article)
    return this.http.post<ArticleModel>(this.apiUrl, article);
  }

}
