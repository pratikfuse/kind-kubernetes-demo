import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JokeRoutingModule } from './joke-routing.module';
import { JokeComponent } from './joke.component';


@NgModule({
  declarations: [
    JokeComponent
  ],
  imports: [
    CommonModule,
    JokeRoutingModule
  ]
})
export class JokeModule { }
