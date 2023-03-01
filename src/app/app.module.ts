import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FilterCardsComponent } from './filter-cards/filter-cards.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { FooterComponent } from './footer/footer.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FichasComponent } from './fichas/fichas.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterCardsComponent,
    FiltrosComponent,
    FooterComponent,
    FilterPipe,
    LoginComponent,
    CarruselComponent,
    FichasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
