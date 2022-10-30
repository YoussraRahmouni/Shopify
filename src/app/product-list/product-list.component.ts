import { Component, OnInit } from '@angular/core';
import productData from '../../assets/data/products.json';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  productList:any[] = productData;
}
