import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './share/share.module';
import { PageTabsComponent } from './page-tabs/page-tabs.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpApiInterceptor } from './core/interceptors/http.token.interceptor';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent,
    PageTabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule,
    IonicModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
