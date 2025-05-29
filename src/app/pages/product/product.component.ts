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
  searchText: string = '';

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

  filteredProducts(): ProductStateDTO[] {
        if (!this.searchText.trim()) return this.products;
        const term = this.searchText.toLowerCase();
        return this.products.filter(product =>
        product.name.toLowerCase().includes(term)
      );
  }

  getQuantity(states: { name: string, quantity: number }[], target: string): number {
    const found = states.find(state => state.name.toLowerCase() === target.toLowerCase());
    return found ? found.quantity : 0;
  }
}
