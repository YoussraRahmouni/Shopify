import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import productData from '../../assets/data/products.json';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productUrl = '../../assets/data/products.json'
  constructor(private http: HttpClient) { }
  // getProducts(): Product[] {
  //   return productData;
  // }
  getProducts() {
    return this.http.get<Product[]>(this.productUrl);
  }
}
