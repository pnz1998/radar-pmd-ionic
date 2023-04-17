import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarningProcessedComponent } from './warning-processed.component';

const routes: Routes = [
  {
    path: '',
    component: WarningProcessedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarningProcessedRoutingModule { }
