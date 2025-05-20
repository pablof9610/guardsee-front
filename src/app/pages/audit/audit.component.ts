import { Component } from "@angular/core";
import { Product } from "../../models/product";
import { ProductService } from "../../services/product.service";

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
}
