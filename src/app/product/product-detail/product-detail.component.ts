import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product'
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product?: Product;
  productId?: any;
  productList: Product[] = [];

  constructor(private activatedRoute: ActivatedRoute, private productService : ProductService) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.productService.getProducts()
      .subscribe((data: Product[]) => this.product = data.find( product => product.id == this.productId));
  }

}
