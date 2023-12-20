import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent implements OnInit {
  articleForm: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required],
    precio: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    imageUrl: ['', [Validators.required, Validators.pattern(/^(https?:\/\/)[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/)]],
    enVenta: [false]
  });
  formSubmitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    // Puedes dejar esta función vacía si no necesitas realizar acciones específicas en la inicialización
  }

  submitForm() {
    if (this.articleForm.valid) {
      // Realiza acciones con los datos del formulario
      console.log('Formulario válido:', this.articleForm.value);
    } else {
      // Mostrar mensajes de error
      console.log('Formulario no válido. Por favor, verifica los campos.');
    }
  }
}
