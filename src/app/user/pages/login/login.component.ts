import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  onSubmit() {
    const usuarioControl = this.formulario.get('usuario');
    const contrasenaControl = this.formulario.get('contrasena');
  
    if (usuarioControl !== null && contrasenaControl !== null) {
      if (this.formulario.valid) {
        const usuario = usuarioControl.value;
        const contrasena = contrasenaControl.value;
        console.log('Usuario:', usuario);
        console.log('Contraseña:', contrasena);
        
        // Aquí puedes realizar acciones con los valores ingresados, como enviar una solicitud HTTP
      } else {
        // El formulario no es válido, puedes mostrar un mensaje de error o realizar otras acciones
      }
    } else {
      // Maneja el caso en el que los controles de usuario o contraseña sean nulos, por ejemplo, mostrando un mensaje de error.
    }
  }
  
}