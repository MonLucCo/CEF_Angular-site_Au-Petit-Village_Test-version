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
  productNames: string[] = [];
  originalProducts: any[] = []; // Une propriété pour stocker la liste originale des produits
  isSortEnabled: boolean = false;
  isSearchEnabled: boolean = false;
  sortOrder: string = '';
  selectedProductName: string = '';

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) { }

  async ngOnInit(): Promise<void> {
    this.products = await this.productsService.getProducts();
    this.originalProducts = [...this.products]; // Stocker la liste originale des produits
    this.productNames = await this.productsService.getProductNames();
    this.productNames = [...new Set(this.productNames)].sort((a, b) => a.localeCompare(b)); // Supprimer les doublons et trier par ordre alphabétique
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
      this.selectedProductName = '';
    }
  }

  onProductNameChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.selectedProductName = target.value;
  }
}
