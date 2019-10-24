import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { ProdCategoriaProducto } from './prod-categoria-producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdCategoriaProductoService {

  formData: ProdCategoriaProducto ;
  list : ProdCategoriaProducto [];
  constructor(private http: HttpClient) { }

  postProdCategoriaProducto(formData: ProdCategoriaProducto) {
    return this.http.post(environment.rootURL + '/ProdCategoriaProducto', formData)
  }

  putProdCategoriaProducto(formData: ProdCategoriaProducto) {
    return this.http.put(environment.rootURL + '/ProdCategoriaProducto/' + formData.CategoriaId, formData)
  }

  deleteProdCategoriaProducto(id: number) {
    return this.http.delete(environment.rootURL + '/ProdCategoriaProducto/'+id)
  }

  refreshList() {
    this.http.get(environment.rootURL + '/ProdCategoriaProducto')
    .toPromise().then(res => this.list = res as ProdCategoriaProducto[])
  }
}
