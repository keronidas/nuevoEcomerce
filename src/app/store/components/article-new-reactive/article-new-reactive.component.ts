import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NameArticleValidator } from '../../helpers/validacion-personalizada.helper';
import { HttpClient } from '@angular/common/http';
import { ArticleModel } from '../../models/Article';

@Component({
  selector: 'app-article-new-reactive',
  templateUrl: './article-new-reactive.component.html',
  styleUrls: []
})
export class ArticleNewReactiveComponent implements OnInit {
  private apiUrl = 'http://localhost:3000/api/articles';
  public article: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), NameArticleValidator()]],
    price: ["", [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/), Validators.min(0.1)]],
    imageUrl: ['', [Validators.required, Validators.pattern(/^(http|https):\/\/[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})+(\/[a-zA-Z0-9]+)*\/?[a-zA-Z0-9]+\.(jpg|jpeg|png|gif)$/)]],
    enVenta: ['']
  });

  constructor(private fb: FormBuilder, private http: HttpClient) {

  }
  ngOnInit(): void {
    
  }
  
 

  isValidField(field: string): boolean | null {
    return this.article.controls[field].errors
      && this.article.controls[field].touched;
  }

  getFieldError(field: string): string | null {

    if (!this.article.controls[field]) return null;

    const errors = this.article.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      console.log(`key: ${key}, value: ${errors[key]}`);
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracters.`;
        case 'pattern':
          return 'El valor no cumple con el patrón requerido.';

        case 'min':
          return 'El valor mínimo es 0.1';

        case 'nombreProhibido':
          return 'El nombre no puede ser Prueba, Test, Mock o Fake.';

      }
    }

    return null;
  }


  onSave(): void {
    if (this.article.invalid) {
      this.article.markAllAsTouched();
      return;
    }
  
    console.log('Datos del formulario:', this.article.value); // Añadir para depuración
  
    this.http.post(this.apiUrl, this.article.value).subscribe(
      response => {
        console.log('Artículo guardado con éxito', response);
      },
      error => console.error('Error al guardar el artículo', error)
    );
  }

}