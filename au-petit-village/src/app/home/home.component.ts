import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
      legende: 'Figurine de Astérix, le célèbre Gaulois.',
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
      }
    },
    {
      id: 2,
      name: 'Figurine Obélix',
      price: 24.99,
      image: '/images/products/figurine-obelix.jpg',
      legende: 'Figurine de Obélix, le fidèle compagnon de Astérix.',
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
      }
    },
    {
      id: 3,
      name: 'Figurine Panoramix',
      price: 29.99,
      image: '/images/products/figurine-panoramix.jpg',
      legende: 'Figurine de Panoramix, le fameux druide Gaulois qui prépare la potion magique.',
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
      }
    },
    {
      id: 4,
      name: 'Figurine Barman Bière',
      price: 17.99,
      image: '/images/products/figurine-gaulois-barman-biere.jpg',
      legende: "Figurine de soldat Gaulois livrant une bière (de l'hydromel !).",
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
      }
    },
    {
      id: 5,
      name: 'Figurine Barman Vin',
      price: 24.99,
      image: '/images/products/figurine-gaulois-barman-vin.jpg',
      legende: "Figurine de soldat Gaulois livrant un 'petit rouge'.",
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
      }
    },
    {
      id: 6,
      name: 'Figurine Barman Hamburger',
      price: 29.99,
      image: '/images/products/figurine-gaulois-barman-hamburger.jpg',
      legende: 'Figurine de de soldat Gaulois livrant un Hamburger (un délice des Dieux !).',
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
      }
    },
    {
      id: 7,
      name: 'Figurine Gaulois avec smartphone',
      price: 19.99,
      image: '/images/products/figurine-gaulois-smartphone.jpg',
      legende: 'Figurines du Gaulois découvrant un smartphone.',
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
      }
    },
    {
      id: 8,
      name: 'Figurine du Gaulois chanteur',
      price: 19.90,
      image: '/images/products/figurine-gaulois-arrangue.jpg',
      legende: 'Figurine du Gaulois chanteur.',
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
      }
    },
    {
      id: 9,
      name: 'Figurine du Gaulois motorisé',
      price: 39.99,
      image: '/images/products/figurine-gaulois-moderne-scotter.jpg',
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
      }
    }
    // Ajoutez d'autres produits ici
  ];

  constructor(private router: Router) { }

  viewProduct(product: any): void {
    this.router.navigate(['/product', { product: JSON.stringify(product) }]);
  }
}
