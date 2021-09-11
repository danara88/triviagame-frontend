import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { GameComponent } from './game.component';
import { SharedModule } from '../../shared/shared.module';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    GameComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule,
    LayoutModule
  ]
})
export class GameModule { }
