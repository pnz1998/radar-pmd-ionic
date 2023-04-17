import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WarningPendingComponent } from './warning-pending.component';

const routes: Routes = [
  {
    path: '',
    component: WarningPendingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarningPendingRoutingModule { }
