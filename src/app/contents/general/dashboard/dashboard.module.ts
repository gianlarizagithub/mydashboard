import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AnalyticsComponent } from './analytics/analytics.component';
import { CrmComponent } from './crm/crm.component';

@NgModule({
  declarations: [AnalyticsComponent, CrmComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
