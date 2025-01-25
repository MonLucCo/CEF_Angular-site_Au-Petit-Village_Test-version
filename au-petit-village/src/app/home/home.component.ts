import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  isSortEnabled: boolean = false;
  sortOrder: string = '';

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) { }

  async ngOnInit(): Promise<void> {
    this.products = await this.productsService.getProducts();
  }

  viewProduct(product: any): void {
    this.router.navigate(['/product', product.id]);
  }

  get sortedProducts(): any[] {
    if (this.isSortEnabled) {
      return this.products.slice().sort((a, b) => {
        if (this.sortOrder === 'asc') {
          return a.price - b.price;
        } else if (this.sortOrder === 'desc') {
          return b.price - a.price;
        } else {
          return 0;
        }
      });
    } else {
      return this.products;
    }
  }

  onSortEnabledChange(): void {
    if (this.isSortEnabled) {
      this.sortOrder = 'asc';
    } else {
      this.sortOrder = '';
    }
  }
}
