import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DormitoryRoutingModule } from './dormitory-routing.module';
import { ShareModule } from '../share/share.module';
import { DormitoryComponent } from './dormitory.component';


@NgModule({
  declarations: [
    DormitoryComponent
  ],
  imports: [
    CommonModule,
    DormitoryRoutingModule,
    ShareModule
  ]
})
export class DormitoryModule { }
