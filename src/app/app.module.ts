import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { PersonajeService } from './services/app.service';
import { PokemonService } from './services/pokemon.service';

//Componentes
import { AppComponent } from './app.component';
import { PersonajesComponent } from './components/shared/personajes/personajes.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/shared/about/about.component';
import { PersonajeComponent } from './components/shared/personaje/personaje.component';
import { BuscarComponent } from './components/shared/buscar/buscar.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FormularioComponent } from './components/shared/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    HomeComponent,
    AboutComponent,
    PersonajeComponent,
    BuscarComponent,
    NavbarComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [
    PersonajeService,
    PokemonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
