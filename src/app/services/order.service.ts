import { Injectable } from '@angular/core';
import orderData from '../../assets/data/orders.json';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }
  getOrders(): Order[]{
    return orderData;
  } 
}
