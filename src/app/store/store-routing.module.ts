import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { StorePageComponent } from './pages/store-page/store-page.component';
import { FormularioReactivoComponent } from './pages/formulario-reactivo/formulario-reactivo.component';
import { FormularioTemplateComponent } from './pages/formulario-template/formulario-template.component';


// localhost:4200/
const routes: Routes = [
    {
        path: '',
        component: LayoutPageComponent,
        children: [
            { path: '', component: StorePageComponent },
            { path: 'formulario-reactivo', component: FormularioReactivoComponent },
            {path:'formulario-template',component:FormularioTemplateComponent},
            {path: '**', redirectTo: ''}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StoreRoutingModule { }