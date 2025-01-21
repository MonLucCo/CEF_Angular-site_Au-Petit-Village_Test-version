import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products = [
    {
      id: 1,
      name: 'Figurine Astérix',
      price: 19.99,
      image: '/images/products/figurine-asterix-potion.jpg',
      description: 'Figurine de Astérix, le célèbre Gaulois.'
    },
    {
      id: 2,
      name: 'Figurine Obélix',
      price: 24.99,
      image: '/images/products/figurine-obelix.jpg',
      description: 'Figurine de Obélix, le fidèle compagnon de Astérix.'
    },
    {
      id: 3,
      name: 'Figurine Panoramix',
      price: 29.99,
      image: '/images/products/figurine-panoramix.jpg',
      description: 'Figurine de Panoramix, le fameux druide Gaulois qui prépare la potion magique.'
    },
    {
      id: 4,
      name: 'Figurine Barman Bière',
      price: 17.99,
      image: '/images/products/figurine-gaulois-barman-biere.jpg',
      description: "Figurine de soldat Gaulois livrant une bière (de l'hydromel !)."
    },
    {
      id: 5,
      name: 'Figurine Barman Vin',
      price: 24.99,
      image: '/images/products/figurine-gaulois-barman-vin.jpg',
      description: "Figurine de soldat Gaulois livrant un 'petit rouge'."
    },
    {
      id: 6,
      name: 'Figurine Barman Hamburger',
      price: 29.99,
      image: '/images/products/figurine-gaulois-barman-hamburger.jpg',
      description: 'Figurine de de soldat Gaulois livrant un Hamburger (un délice des Dieux !).'
    },
    {
      id: 7,
      name: 'Figurine Gaulois avec smartphone',
      price: 19.99,
      image: '/images/products/figurine-gaulois-smartphone.jpg',
      description: 'Figurines du Gaulois découvrant un smartphone.'
    },
    {
      id: 8,
      name: 'Figurine du Gaulois chanteur',
      price: 19.90,
      image: '/images/products/figurine-gaulois-arrangue.jpg',
      description: 'Figurine du Gaulois chanteur.'
    },
    {
      id: 9,
      name: 'Figurine du Gaulois motorisé',
      price: 39.99,
      image: '/images/products/figurine-gaulois-moderne-scotter.jpg',
      description: 'Figurine du soldat Gaulois moderne (sur son vespa...).'
    }
    // Ajoutez d'autres produits ici
  ];
}
