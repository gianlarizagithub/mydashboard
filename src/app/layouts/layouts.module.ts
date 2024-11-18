import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentContainerComponent } from './content-container/content-container.component';
import { VerticalLayoutComponent } from './vertical-layout/vertical-layout.component';
import { HorizontalLayoutComponent } from './horizontal-layout/horizontal-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';

import { SimplebarAngularModule } from 'simplebar-angular';
import { SettingsComponent } from './components/settings/settings.component';
import { HorizontalHeaderComponent } from './components/horizontal-header/horizontal-header.component';

@NgModule({
  declarations: [
    ContentContainerComponent,
    VerticalLayoutComponent,
    HorizontalLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SettingsComponent,
    HorizontalHeaderComponent,
  ],
  imports: [CommonModule, AppRoutingModule, SimplebarAngularModule],
})
export class LayoutsModule {}
