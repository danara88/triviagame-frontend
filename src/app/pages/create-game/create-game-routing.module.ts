import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGameComponent } from './create-game.component';
import { AuthGuard } from '../../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CreateGameComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CreateGameRoutingModule { }
