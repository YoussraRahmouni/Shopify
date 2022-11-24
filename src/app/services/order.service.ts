import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import orderData from '../../assets/data/orders.json';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderUrl = '../../assets/data/orders.json';
  constructor(private http: HttpClient) { }
  // getOrders(): Order[]{
  //   return orderData;
  // } 
  getOrders() {
    return this.http.get<Order[]>(this.orderUrl);
  }
}
