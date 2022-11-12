import { Component, OnInit } from '@angular/core';
import {Order} from '../../models/order';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  faInfoCircle = faInfoCircle;
  orderList: Order[] = [];

  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
    this.orderList = this.orderService.getOrders();
  }

}
