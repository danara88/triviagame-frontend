import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: 'game/:categoryID',
    loadChildren: () => import('./pages/game/game.module').then(m => m.GameModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
