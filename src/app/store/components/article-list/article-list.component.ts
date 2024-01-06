import { Component } from '@angular/core';
import { ArticleModel } from '../../models/Article';
import { HttpClient } from '@angular/common/http';
import { ArticleServiceService } from '../../services/article-service.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {


  listaProductos: ArticleModel[] = [];
  //Definimos los productos

  MeltedCheeseBurger: ArticleModel = {
    name: 'Melted cheese burger',
    imageUrl: './assets/img/hamburguesa-queso-fundido.jpg',
    price: 14.90,
    isOnSale: true,
    quantityInCart: 0,
    cantidadEnStock: 15
  };

  BigKingStreet: ArticleModel = {
    name: 'Big King Street',
    imageUrl: './assets/img/big-king-street.jpg',
    price: 13.75,
    isOnSale: true,
    quantityInCart: 0,
    cantidadEnStock: 12
  };

  BaconBusted: ArticleModel = {
    name: 'Bacon Busted',
    imageUrl: './assets/img/bacon-busted.jpg',
    price: 14.20,
    isOnSale: true,
    quantityInCart: 0,
    cantidadEnStock: 0
  };




  constructor(private articleService: ArticleServiceService) {}

  ngOnInit() {
    this.articleService.getArticles().subscribe(
      (articles) => {
        this.listaProductos = articles;
        this.checkStock();
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

  // Aquí puedes añadir otros métodos como añadir o actualizar artículos
}

