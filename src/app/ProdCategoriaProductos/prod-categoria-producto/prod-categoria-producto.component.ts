import { Component, OnInit } from '@angular/core';
import { ProdCategoriaProductoService } from 'src/app/shared/ProdCategoriaProducto/prod-categoria-producto.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-prod-categoria-producto',
  templateUrl: './prod-categoria-producto.component.html',
  styleUrls: ['./prod-categoria-producto.component.css']
})
export class ProdCategoriaProductoComponent implements OnInit {

  constructor(private service: ProdCategoriaProductoService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {
      CategoriaId: null,
      NombreCategoria: ''
    }
  }


  onSubmit(form: NgForm) {
    if (form.value.CategoriaID == null)
      this.insertRecord(form);
    else
      this.updateRecord(form)
  }

  insertRecord(form: NgForm) {
    this.service.postProdCategoriaProducto(form.value).subscribe(res => {
      this.toastr.success('Guardado - ProdCategoriaProducto', 'Oulet')
      this.service.refreshList();
      this.resetForm(form);
    })
  }

  updateRecord(form: NgForm) {
    this.service.putProdCategoriaProducto(form.value).subscribe(res => {
      this.toastr.warning('Actualizado - ProdCategoriaProducto', 'Oulet')
      this.service.refreshList();
      this.resetForm(form);
    })
  }
}
