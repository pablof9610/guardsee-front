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
  icone: string = '⌨️';
  name: string = '';
  quantity: number = 0;
  ticket: string = '';

  constructor(private productService: ProductService,
              private toastr: ToastrService
  ) {}

  saveProduct() {
    const PRODUTO: Product = {
      name: this.name,
      quantity: this.quantity,
      ticket: this.ticket
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
