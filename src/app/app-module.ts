import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { Menu } from './menu/menu';
import { Home } from './home/home';
import { CalcularMedia } from './calcular-media/calcular-media';
import { ApoliceSeguro } from './apolice-seguro/apolice-seguro';
import { ConversorTemperatura } from './conversor-temperatura/conversor-temperatura';
import { CalcularImc } from './calcular-imc/calcular-imc';
import { FormsModule } from '@angular/forms';
import { NotFound } from './not-found/not-found';

@NgModule({
  declarations: [
    App,
    Menu,
    Home,
    CalcularMedia,
    ApoliceSeguro,
    ConversorTemperatura,
    CalcularImc,
    NotFound,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule, NgbSlide, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
