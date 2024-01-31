import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleServiceService } from '../../services/article-service.service';
import { ArticleModel } from '../../models/Article';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {
  articleCode: string = ''; // Propiedad para almacenar el código del artículo
  listaProductos: ArticleModel[] = [];
  productoBuscado: ArticleModel | null = null;

  constructor(private route: ActivatedRoute, private articleService: ArticleServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.articleCode = params['id']; // 'id' debe coincidir con el nombre del parámetro en la ruta

      // Luego puedes utilizar this.articleCode para realizar cualquier operación
      // relacionada con el código del artículo, como obtener los detalles del artículo.
    });
    // Obtener el código del artículo de la ruta
    this.articleService.getArticles().subscribe(
      (articles) => {
        this.listaProductos = articles;
        articles.forEach(article => {
          if (article.id == this.articleCode) {
            this.productoBuscado = article;
          }
        })

      }
    );
  }
}