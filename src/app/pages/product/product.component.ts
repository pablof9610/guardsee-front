import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product";

@Component ({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent implements OnInit {
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
