import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarningProcessedRoutingModule } from './warning-processed-routing.module';
import { WarningProcessedComponent } from './warning-processed.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    WarningProcessedComponent
  ],
  imports: [
    CommonModule,
    WarningProcessedRoutingModule,
    ShareModule
  ]
})
export class WarningProcessedModule { }
