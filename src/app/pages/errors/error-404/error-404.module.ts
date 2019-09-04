import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Error404Page } from './error-404.component';
import { routes } from './error-404.routing';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [Error404Page],
  imports: [
    ComponentsModule,
    CommonModule,
    DirectivesModule,
    RouterModule.forChild(routes)
  ]
})
export class Error404Module {}
