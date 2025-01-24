import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-about',
  standalone: false,

  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  history: any[] = [];

  constructor(
    private productsService: ProductsService
  ) { }

  async ngOnInit(): Promise<void> {
    this.history = await this.productsService.getHistory();
  }
}
