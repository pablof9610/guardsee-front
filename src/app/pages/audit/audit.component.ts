import { Component } from "@angular/core";
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.scss'
})

export class AuditComponent {
  products: Product[] = [];

    constructor(private productService: ProductService) {}

    ngOnInit(): void {
        this.productService.getAllProduct().subscribe(
          (data) => {
            this.products = data;
          },
          (err) => {
            console.error('Error to find products ',err);
          }
        )
    }

    editProduct(serialNumber: string) {
    }

    deleteProduct(serialNumber: string) {
      Swal.fire({
        title: 'Tem certeza?',
        text: 'Esta ação não poderá ser desfeita!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          console.log(serialNumber)
          this.productService.deleteProductBySerialNumber(serialNumber).subscribe(
          (data) => {
            console.log("Produto deletado, id retornado: ",data);
            this.products = this.products.filter(e => e.serialNumber !== serialNumber);
          },
          (err) => {
            console.log("Erro ao excluir produtos: ",err);
        });
        }
      });
    }
}
