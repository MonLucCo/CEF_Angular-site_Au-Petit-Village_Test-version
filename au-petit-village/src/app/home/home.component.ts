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
}
