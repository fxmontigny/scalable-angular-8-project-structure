import { NgModule } from '@angular/core';
import { LabelDirective } from './label/label.directive';

const list = [LabelDirective];

@NgModule({
  imports: [],
  declarations: [...list],
  exports: list
})
export class DirectivesModule {}
