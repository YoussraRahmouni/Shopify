import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  faInfoCircle = faInfoCircle;
  productList:any[] = []

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }
  
}
