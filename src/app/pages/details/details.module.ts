import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailsPage } from './details.component';
import { routes } from './details.routing';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [DetailsPage],
  imports: [
    ComponentsModule,
    CommonModule,
    DirectivesModule,
    RouterModule.forChild(routes)
  ]
})
export class DetailsModule {}
