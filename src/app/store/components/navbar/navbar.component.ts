import { Component, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NavBar } from '../../models/Navbar.interface';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  
  @Output() menu: NavBar[] = [
    { name: "Inicio", url: "" },
    { name: "Articulos", url: "" },
    { name: "Nuevo Articulo Template", url: "./formulario-template" },
    { name: "Nuevo Articulo Reactivo", url: "./formulario-reactivo" }
  ];

  constructor(
    private router: Router
  ) {

  }


}