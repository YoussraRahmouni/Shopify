import { Component, OnInit } from '@angular/core';
import orderData from '../../assets/data/orders.json';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  orderList: any[] = orderData;

}
