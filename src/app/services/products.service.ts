import { Injectable } from '@angular/core';
import { Paint } from '../types';
import { data } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Paint[]= data;
  constructor() { }

  public getAllProducts():Paint[] {
    return this.products
  }
}
