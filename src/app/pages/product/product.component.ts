import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { Product } from "../../models/product";
import { ProductListDTO } from "../../models/ProductListDTO";

@Component ({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent implements OnInit {
  products: ProductListDTO[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
      this.productService.getAllProductDistinct().subscribe(
        (data) => {
          this.products = data;
        },
        (err) => {
          console.error('Error to find products ',err);
        }
      )

  }
}
