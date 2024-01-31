import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: { username: string, password: string }[] = [];

  constructor(private http: HttpClient) { }
  private loginUrl = 'http://localhost:3000/auth/login';
  private registerUrl = 'http://localhost:3000/auth/register';

  loginUser(userData: { username: string, password: string }) {
    return this.http.post<any>(this.loginUrl, userData);
  }
  registerUser(username: string) {
    return this.http.post<any>(this.registerUrl, { username });
  }
}
