import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { DirectivesModule } from '../directives/directives.module';

const list = [];

@NgModule({
  declarations: [...list],
  imports: [CommonModule, RouterModule, PipesModule, DirectivesModule],
  exports: list
})
export class ComponentsModule {}
