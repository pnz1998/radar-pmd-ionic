import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserPageRoutingModule } from './user-page-routing.module';
import { ShareModule } from '../share/share.module';
import { UserPageComponent } from './user-page.component';


@NgModule({
  declarations: [
    UserPageComponent
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    ShareModule
  ]
})
export class UserPageModule { }
