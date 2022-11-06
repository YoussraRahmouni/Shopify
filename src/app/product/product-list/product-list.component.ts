import { Component, OnInit } from '@angular/core';
import productData from '../../../assets/data/products.json';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  faInfoCircle = faInfoCircle;

  constructor() { }

  ngOnInit(): void {
  }
  
  productList:any[] = productData;
}
