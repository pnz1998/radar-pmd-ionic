import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarningAnalysisRoutingModule } from './warning-analysis-routing.module';
import { ShareModule } from '../share/share.module';
import { WarningAnalysisComponent } from './warning-analysis.component';


@NgModule({
  declarations: [
    WarningAnalysisComponent
  ],
  imports: [
    CommonModule,
    WarningAnalysisRoutingModule,
    ShareModule
  ]
})
export class WarningAnalysisModule { }
