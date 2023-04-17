import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { ShareModule } from '../share/share.module';
import { HomePageComponent } from './home-page.component';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    ShareModule
  ]
})
export class HomePageModule { }
