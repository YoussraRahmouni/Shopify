import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  faInfoCircle = faInfoCircle;
  productList:Product[] = []

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe((data: Product[]) => this.productList = data);
  }
  
}
