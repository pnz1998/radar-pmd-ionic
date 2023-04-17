import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarningAnalysisComponent } from './warning-analysis.component';

const routes: Routes = [
  {
    path: '',
    component: WarningAnalysisComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarningAnalysisRoutingModule { }
