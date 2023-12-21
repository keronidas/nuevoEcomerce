import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-article-new-template',
  templateUrl: './article-new-template.component.html',
  styleUrls: ['./article-new-template.component.css']
})
export class ArticleNewTemplateComponent implements OnInit {
  public miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(5)]],
    precio: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    imageUrl: ['', [Validators.required, Validators.pattern(/^(http|https):\/\/[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})+(\/[a-zA-Z0-9]+)*\/?[a-zA-Z0-9]+\.(jpg|jpeg|png|gif)$/)]],
    enVenta: ['']
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  isValidField(field: string): boolean {
    const control = this.miFormulario.controls[field];
    return control && control.errors && control.touched ? true : false;
  }


  getFieldError(field: string): string | null {

    if (!this.miFormulario.controls[field]) return null;

    const errors = this.miFormulario.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido';

        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracters.`;
      }
    }

    return null;
  }


  onSave(): void {

    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);

    // this.miFormulario.reset({ precio: 0, inStorage: 0 });

  }

}