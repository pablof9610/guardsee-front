import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../models/product";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/product'

  constructor(private http: HttpClient ) { }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl, {responseType: 'json'})
  }

  saveProduct(product: Product): Observable<any> {
    return this.http.post(this.baseUrl, product)
  }
}
