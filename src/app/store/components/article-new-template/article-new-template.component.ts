import { Component } from '@angular/core';
import {  FormGroup } from '@angular/forms';



@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: []
})

export class ArticleNewTemplateComponent {
  articleForm = new FormGroup({});

  article = {
    nombre: '',
    precio: '',
    imageUrl: '',
    enVenta: false
  };

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Formulario enviado:', this.article);
    } else {
      console.log('Formulario no válido');
    }
  }
}