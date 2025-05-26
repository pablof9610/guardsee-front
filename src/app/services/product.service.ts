import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../models/product";
import { ProductStateDTO } from "../models/ProductStateDTO";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  private baseUrl = 'http://localhost:8080/product'

  constructor(private http: HttpClient ) { }

  getAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl, {responseType: 'json'})
  }

  getAllProductDistinct(): Observable<ProductStateDTO[]> {
    return this.http.get<ProductStateDTO[]>(`${this.baseUrl}/distinct`)
  }

  saveProduct(product: Product): Observable<any> {
    return this.http.post(this.baseUrl, product)
  }

  deleteProductBySerialNumber(serialNumber: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${serialNumber}`);
  }
}
