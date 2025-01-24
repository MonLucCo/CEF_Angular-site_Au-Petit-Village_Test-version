import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private datasUrl = '/datas/products.json';

  constructor() { }

  async getProducts(): Promise<any[]> {
    const response = await fetch(this.datasUrl);
    const data = await response.json();
    return data.products;
  }

  async getProductById(id: number): Promise<any> {
    const products = await this.getProducts();
    return products.find(product => product.id === id);
  }

  async getHistory(): Promise<any[]> {
    const response = await fetch(this.datasUrl);
    const data = await response.json();
    return data.history;
  }
}
