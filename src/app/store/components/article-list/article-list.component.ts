import { Component } from '@angular/core';
import { ArticleModel } from '../../models/Article';

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




  constructor() {
    //Iniciamos la lista de productos
    this.listaProductos = [this.MeltedCheeseBurger, this.BigKingStreet, this.BaconBusted];

    //Comprobamos si hay stock, si no lo hay, desactivamos la venta
    this.listaProductos.forEach(element => {
      if (element.cantidadEnStock == 0) {
        element.isOnSale = false;
      }
    });
  }

}

