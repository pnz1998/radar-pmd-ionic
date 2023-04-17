import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarningPendingRoutingModule } from './warning-pending-routing.module';
import { WarningPendingComponent } from './warning-pending.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    WarningPendingComponent
  ],
  imports: [
    CommonModule,
    WarningPendingRoutingModule,
    ShareModule
  ]
})
export class WarningPendingModule { }
