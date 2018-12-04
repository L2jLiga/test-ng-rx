import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SubcompComponent } from './subcomp/subcomp.component';
import { SubcompOnpushComponent } from './subcomp-onpush/subcomp-onpush.component';

@NgModule({
  declarations: [
    AppComponent,
    SubcompComponent,
    SubcompOnpushComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
