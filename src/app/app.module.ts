import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatRepository } from './core/repositories/cat.repository';
import CatWebRepository from './data/cat-web-repository/cat-web-repository';
import { PresentationModule } from './presentation/presentation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PresentationModule
  ],
  providers: [
    {provide: CatRepository, useClass: CatWebRepository}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
