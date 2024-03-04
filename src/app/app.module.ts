import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Ilustration1Component } from './ilustration1/ilustration1.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { Illustration2Component } from './illustration2/illustration2.component';
import { GrayBackgroundComponent } from './gray-background/gray-background.component';
import { ProductPlansComponent } from './product-plans/product-plans.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Ilustration1Component,
    InfoSectionComponent,
    Illustration2Component,
    GrayBackgroundComponent,
    ProductPlansComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
