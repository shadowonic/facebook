import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { FacebookModule, FacebookService, InitParams } from 'ngx-facebook';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxUploaderModule } from 'ngx-uploader';

import { AppComponent } from '@app/app.component';
import { HeaderComponent } from '@app/header/header.component';

import { AppRoutingModule } from '@app/app-routing.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    SharedModule,
    NgxUploaderModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    FacebookModule.forRoot()
  ],
  exports: [
    SharedModule,
    NgxUploaderModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private fb: FacebookService) {
    const initParams: InitParams = {
      appId: '618042761915806',
      xfbml: true,
      version: 'v2.8'
    };
    this.fb.init(initParams);
  }
}
