import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitsRoutingModule } from './uikits-routing.module';
import { AccordionComponent } from './accordion/accordion.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [
    AccordionComponent,
    ButtonsComponent
  ],
  imports: [CommonModule, UiKitsRoutingModule],
})
export class UikitsModule {}
