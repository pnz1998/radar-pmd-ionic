import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DormitoryComponent } from './dormitory.component';

const routes: Routes = [
  {
    path: '',
    component: DormitoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DormitoryRoutingModule { }
