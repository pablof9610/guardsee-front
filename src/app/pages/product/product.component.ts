import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../services/product.service";
import { ProductStateDTO } from "../../models/ProductStateDTO";

@Component ({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent implements OnInit {
  products: ProductStateDTO[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
      this.productService.getAllProductDistinct().subscribe(
        (data) => {
          this.products = data;
          console.log(data);
        },
        (err) => {
          console.error('Error to find products ',err);
        }
      )
  }

  getQuantity(states: { name: string, quantity: number }[], target: string): number {
    const found = states.find(state => state.name.toLowerCase() === target.toLowerCase());
    return found ? found.quantity : 0;
  }
}
