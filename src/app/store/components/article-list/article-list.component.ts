import { Component } from '@angular/core';
import { ArticleModel } from '../../models/Article';
import { ArticleServiceService } from '../../services/article-service.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {


  listaProductosFiltrados: ArticleModel[] = [];
  listaProductos: ArticleModel[] = [];




  constructor(private articleService: ArticleServiceService) {
  }

  ngOnInit() {
    this.articleService.getArticles().subscribe(
      (articles) => {
        this.listaProductos = articles;
        this.listaProductosFiltrados = articles;
        this.checkStock();
        console.log("Ahora");
      },
      (error) => {
        console.error('Error al obtener los artículos', error);
      }
    );
  }

  checkStock() {
    this.listaProductos.forEach(article => {
      if (article.cantidadEnStock === 0) {
        article.isOnSale = false;
      }
    });
  }

  buscarArticulos(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    this.listaProductosFiltrados = this.listaProductos.filter(
      (articulo) => articulo.name.toLowerCase().includes(value.toLowerCase())
    );
   
  }
  
}
