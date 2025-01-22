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
    description: 'Figurine du soldat Gaulois moderne (sur son vespa...).'
  };

  constructor() { }

  ngOnInit(): void { }
}
