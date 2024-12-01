import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { ButtonsComponent } from './buttons/buttons.component';

const routes: Routes = [
  {
    path: 'accordion',
    component: AccordionComponent,
  },
  {
    path: 'buttons',
    component: ButtonsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiKitsRoutingModule {}
