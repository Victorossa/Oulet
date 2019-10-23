import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdTipoProductoComponent } from './prod-tipo-productos/prod-tipo-producto/prod-tipo-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdTipoProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
