import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { MatDialogModule } from '@angular/material/dialog'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProdCategoriaProductoComponent } from './ProdCategoriaProductos/prod-categoria-producto/prod-categoria-producto.component';
import { ProdCategoriaProductoContComponent } from './ProdCategoriaProductos/prod-categoria-producto-cont/prod-categoria-producto-cont.component';
import { ProdCategoriaProductoListComponent } from './ProdCategoriaProductos/prod-categoria-producto-list/prod-categoria-producto-list.component';
import { ProdCategoriaProductoService } from './shared/ProdCategoriaProducto/prod-categoria-producto.service';

@NgModule({
  declarations: [
    AppComponent,
    ProdCategoriaProductoComponent,
    ProdCategoriaProductoContComponent,
    ProdCategoriaProductoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  entryComponents:[],
  providers: [ProdCategoriaProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
