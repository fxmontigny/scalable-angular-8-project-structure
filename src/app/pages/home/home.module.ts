import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.component';
import { routes } from './home.routing';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';

@NgModule({
  declarations: [HomePage],
  imports: [
    ComponentsModule,
    CommonModule,
    DirectivesModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule {}
