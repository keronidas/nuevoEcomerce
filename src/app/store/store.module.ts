import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { FormularioReactivoComponent } from './pages/formulario-reactivo/formulario-reactivo.component';
import { FormularioTemplateComponent } from './pages/formulario-template/formulario-template.component';
import { ArticleItemComponent } from './components/article-item/article-item.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { RouterModule } from '@angular/router';
import { StoreRoutingModule } from './store-routing.module';
import { ArticleNewTemplateComponent } from './components/article-new-template/article-new-template.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    LayoutPageComponent,
    FormularioReactivoComponent,
    FormularioTemplateComponent,
    ArticleItemComponent,
    ArticleListComponent,
    StorePageComponent,
    ArticleNewTemplateComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    StoreRoutingModule,
    ReactiveFormsModule
  ]
})
export class StoreModule { }
