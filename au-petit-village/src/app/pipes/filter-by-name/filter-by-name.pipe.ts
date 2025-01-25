import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe pour filtrer un tableau d'objets par nom.
 * Utilisation : {{ array | filterByName:searchTerm }}
 * @param array - Le tableau d'objets à filtrer.
 * @param searchTerm - Le terme de recherche.
 * @returns Le tableau filtré.
 */
@Pipe({
  name: 'filterByName',
  standalone: false
})
export class FilterByNamePipe implements PipeTransform {
  transform(products: any[], tag: string): any[] {
    if (!tag) {
      return products;
    }
    return products.filter(product => product.tags.includes(tag));
  }
}
