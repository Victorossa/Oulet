import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdTipoProductoComponent } from './prod-tipo-productos/prod-tipo-producto/prod-tipo-producto.component';
import { PruebaPruebaVeamosComponent } from './shared/prueba/prueba-prueba-veamos/prueba-prueba-veamos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdTipoProductoComponent,
    PruebaPruebaVeamosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
