import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ArticleModel } from '../../models/Article';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent {
  @Input() articulo!: ArticleModel;


  handleImageError(event: any) {
    event.target.src = './assets/img/Imagen-no-disponible.png'; 
  }
 
  agregarProducto() {
    this.articulo.quantityInCart++;
  }
  quitarProducto() {
    if (this.articulo.quantityInCart > 0) { this.articulo.quantityInCart--; }

  }

 
}
