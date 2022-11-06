import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import orderData from '../../../assets/data/orders.json';
import { Order } from '../../order';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order?: Order;
  orderId?: any;
  orderList: Order[] = orderData;

  constructor(private activatedRoute : ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.orderId = this.activatedRoute.snapshot.paramMap.get('id');
    this.order = this.orderList.find(order => order.id == this.orderId);
  }

}
