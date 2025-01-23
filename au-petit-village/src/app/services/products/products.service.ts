import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = '/datas/products.json';

  constructor() { }

  async getProducts(): Promise<any[]> {
    const response = await fetch(this.productsUrl);
    const data = await response.json();
    return data;
  }

  async getProductById(id: number): Promise<any> {
    const products = await this.getProducts();
    return products.find(product => product.id === id);
  }
}
