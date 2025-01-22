import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,

  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product = {
    name: 'Figurine du Gaulois motorisé',
    price: 39.99,
    imageUrl: '/images/products/figurine-gaulois-moderne-scotter.jpg',
    legende: 'Figurine du soldat Gaulois moderne (sur son vespa...).',
    details: {
      description: [
        { idParagraphe: 1, contentParagraphe: 'Premier paragraphe de la description longue du produit.' },
        { idParagraphe: 2, contentParagraphe: 'Second paragraphe de la description longue du produit.' },
        { idParagraphe: 3, contentParagraphe: 'Dernier paragraphe de la description longue du produit.' },
      ],
      features: [
        { label: 'matière', content: 'procelaine' },
        { label: 'dimensions', content: '20x10x25cm (Lxlxh)' },
        { label: 'masse', content: '0,8kg' },
        { label: 'colorisation', content: 'peinture acrylique' }
      ],
      delivery: [
        { label: 'méthode', content: 'livreur' },
        { label: 'délais', content: '3-5 jours ouvrés' },
        { label: 'coût', content: 'forfait 5€' },
      ],
      stock: 10,
    },
  };

  liked: boolean = false;

  expandedParagraphs: number[] = [1];

  constructor() { }

  ngOnInit(): void { }

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
    this.expandedParagraphs = this.product.details.description.map(p => p.idParagraphe);
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
