import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Ilustration1Component } from './ilustration1/ilustration1.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { Illustration2Component } from './illustration2/illustration2.component';

import { ProductPlansComponent } from './product-plans/product-plans.component';
import { MapAndSocialsComponent } from './map-and-socials/map-and-socials.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Ilustration1Component,
    InfoSectionComponent,
    Illustration2Component,

    ProductPlansComponent,
    MapAndSocialsComponent,
    FeedbacksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
