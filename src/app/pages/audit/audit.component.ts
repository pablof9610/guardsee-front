import { Component } from "@angular/core";
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";
import { EditPopupComponent } from "../../components/edit-popup/edit-popup.component";
import { ToastrService } from "ngx-toastr";
import Swal from "sweetalert2";

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.scss'
})

export class AuditComponent {
  products: Product[] = [];
  selectedProduct: Product | null = null;
  searchText: string = '';

    constructor(private productService: ProductService,
                private toastr: ToastrService
    ) {}

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

    filteredProducts(): Product[] {
      if (!this.searchText.trim()) return this.products;
      const term = this.searchText.toLowerCase();
      return this.products.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.vendor.toLowerCase().includes(term) ||
      product.model.toLowerCase().includes(term) ||
      product.serialNumber.toLowerCase().includes(term) ||
      product.ticket?.toLowerCase().includes(term) ||
      product.detail.toLowerCase().includes(term) ||
      product.state?.toLowerCase().includes(term)
    );
    }

    editProduct(product: Product) {
      this.selectedProduct = product;
    }

    closePopup() {
      this.selectedProduct = null;
    }

    saveSelectedProduct(product: Product) {
      console.log(product);
      this.productService.updateProduct(product).subscribe(
        (data) => {
          console.log(data.ticket);
          this.toastr.success('Produto alterado com sucesso!', 'Sucesso!');
          const index = this.products.findIndex(p => p.serialNumber == data.serialNumber);
          if (index != -1) {
            this.products[index] = data;
            this.products = [...this.products];
          }
          this.selectedProduct = null;
        },
        (err) => {
          console.log('Erro ao alterar o produto: ',err)
        }
      )
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
