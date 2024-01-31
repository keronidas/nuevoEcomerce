import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: { username: string, password: string }[] = [];

  constructor() { }

  // Método para verificar la autenticación de un usuario
  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username);

    if (user && user.password === password) {
      console.log("Login correcto")
      return true;
    } else {
      console.log("Login incorrecto")
      return false;
    }
  }

  // Método para registrar un usuario y asignarle la contraseña "SECRET"
  register(username: string): boolean {
    if (!this.isUsernameTaken(username)) {
      this.users.push({ username, password: 'SECRET' });
      return true;
    } else {
      return false; // El nombre de usuario ya está en uso
    }
  }

  // Método auxiliar para verificar si un nombre de usuario ya está en uso
  private isUsernameTaken(username: string): boolean {
    return this.users.some(u => u.username === username);
  }
}
