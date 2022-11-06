import { Component, OnInit } from '@angular/core';
import orderData from '../../../assets/data/orders.json';
import {Order} from '../../order';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  faInfoCircle = faInfoCircle;

  constructor() { }

  ngOnInit(): void {
  }
  
  orderList: Order[] = orderData;

}
