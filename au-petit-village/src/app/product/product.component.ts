import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: any;
  liked: boolean = false;
  expandedParagraphs: number[] = [1];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.product = JSON.parse(params['product']);
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
