import { NgModule } from '@angular/core';

import { SharedModule } from '@appShared/shared.module';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';

import { AvailabilityComponent } from '../dashboard/availability/availability.component';
import { SettingsComponent } from '../dashboard/settings/settings.component';
import { DashboardComponent } from '../dashboard/dashboard.component';


@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    AvailabilityComponent,
    SettingsComponent
  ]
})
export class DashboardModule { }
