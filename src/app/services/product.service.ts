import { Injectable } from '@angular/core';
import productData from '../../assets/data/products.json';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  getProducts(): Product[] {
    return productData;
  }
}
