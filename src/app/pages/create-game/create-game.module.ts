import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateGameRoutingModule } from './create-game-routing.module';
import { CreateGameComponent } from './create-game.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [
    CreateGameComponent
  ],
  imports: [
    CommonModule,
    CreateGameRoutingModule,
    LayoutModule,
    ReactiveFormsModule
  ]
})
export class CreateGameModule { }
