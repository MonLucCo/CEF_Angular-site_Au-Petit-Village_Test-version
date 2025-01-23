import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products/products.service';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: any = {};
  liked: boolean = false;
  expandedParagraphs: number[] = [1];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async params => {
      const productId = +params['id'];  // +params pour convertir en numérique la chaîne de caractères
      this.product = await this.productsService.getProductById(productId);
      if (!this.product) {
        this.router.navigate(['/error404']);
      }
    });
  }

  toggleLike(): void {
    this.liked = !this.liked;
  }

  expandNextParagraph(): void {
    const nextParagraph = this.expandedParagraphs.length + 1;
    if (nextParagraph <= this.product.details.description.length) {
      this.expandedParagraphs.push(nextParagraph);
    }
  }

  expandAllParagraphs(): void {
    this.expandedParagraphs = this.product.details.description.map((p: { idParagraphe: number }) => p.idParagraphe);
  }

  collapseParagraph(paragraphId: number): void {
    this.expandedParagraphs = this.expandedParagraphs.filter(id => id !== paragraphId);
  }

  collapseAllParagraphs(): void {
    this.expandedParagraphs = [1];
  }

  isParagraphExpanded(paragraphId: number): boolean {
    return this.expandedParagraphs.includes(paragraphId);
  }
}
