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
  productTags: string[] = [];
  originalProducts: any[] = []; // Une propriété pour stocker la liste originale des produits
  isSortEnabled: boolean = false;
  isSearchEnabled: boolean = false;
  sortOrder: string = '';
  selectedProductTag: string = '';

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) { }

  async ngOnInit(): Promise<void> {
    this.products = await this.productsService.getProducts();
    this.originalProducts = [...this.products]; // La liste originale des produits
    this.productTags = await this.productsService.getProductTags();
  }

  viewProduct(product: any): void {
    this.router.navigate(['/product', product.id]);
  }

  onSortEnabledChange(): void {
    if (this.isSortEnabled) {
      this.sortOrder = 'asc';
    } else {
      this.sortOrder = '';
      this.products = [...this.originalProducts]; // Réinitialiser la liste des produits
    }
  }

  onSearchEnabledChange(): void {
    if (!this.isSearchEnabled) {
      this.selectedProductTag = '';
    }
  }

  onProductTagChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedProductTag = target.value;
  }
}
