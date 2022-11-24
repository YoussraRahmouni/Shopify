import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/services/order.service';
import { Order } from '../../models/order';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  order?: Order;
  orderId?: any;
  orderList: Order[] = [];

  constructor(private activatedRoute : ActivatedRoute, private orderService : OrderService) { 
    
  }

  ngOnInit(): void {
    this.orderId = this.activatedRoute.snapshot.paramMap.get('id');
    this.orderService.getOrders()
      .subscribe((data: Order[]) => this.order = data.find( order => order.id == this.orderId));
    // this.orderList = this.orderService.getOrders();
    // this.orderId = this.activatedRoute.snapshot.paramMap.get('id');
    // this.order = this.orderList.find(order => order.id == this.orderId);
  }

}
