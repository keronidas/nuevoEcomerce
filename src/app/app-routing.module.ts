import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
  { path: '', loadChildren: () => import('./article/article.module').then(m => m.ArticleModule) },
  // { path: '**', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
