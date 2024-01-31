import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { FormularioReactivoComponent } from './pages/formulario-reactivo/formulario-reactivo.component';
import { FormularioTemplateComponent } from './pages/formulario-template/formulario-template.component';
import { VisorComponentesComponent } from './pages/visor-componentes/visor-componentes.component';
import { ArticleDetailsComponent } from './components/article-details/article-details.component';


// localhost:4200/
const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            { path: '', component: StorePageComponent },
            { path: 'formulario-reactivo', component: FormularioReactivoComponent },
            { path: 'formulario-template', component: FormularioTemplateComponent },
            {
                path: 'article', component: VisorComponentesComponent,
                children: [
                    { path: ':id', component: ArticleDetailsComponent }
                ]
            },
            { path: '**', redirectTo: '' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticleRoutingModule { }