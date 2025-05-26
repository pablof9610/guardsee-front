import { Component } from "@angular/core";
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.scss'
})

export class ManageComponent {
  // icone: string = '⌨️';
  name: string = '';
  vendor: string = '';
  model: string = '';
  ticket: string = '';
  serialNumber: string = '';
  detail: string = '';
  state: string = 'em estoque';

  constructor(private productService: ProductService,
              private toastr: ToastrService
  ) {}

  saveProduct() {
    const requiredFields = [this.name, this.vendor, this.model, this.detail, this.serialNumber];

    if (requiredFields.some(field => field.trim() == '')) {
      this.toastr.error('Preencha um ou mais campos em branco.', 'Erro!');
      return;
    }

    const PRODUTO: Product = {
      name: this.name,
      vendor: this.vendor,
      model: this.model,
      ticket: this.ticket,
      serialNumber: this.serialNumber,
      detail: this.detail
    };

    this.productService.saveProduct(PRODUTO).subscribe(
      (data) => {
        console.log(data);
        this.toastr.success('Produto salvo com sucesso!', 'Sucesso!');
      },
      (err) => {
        console.log("Erro ao salvar produto: ", err);
        this.toastr.error('Erro ao salvar o produto', 'Erro');
      }
    );
  }
}
