import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product'
import productData from '../../../assets/data/products.json'
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
    this.productList = this.productService.getProducts();
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = this.productList.find(product => product.id == this.productId);
  }

}
