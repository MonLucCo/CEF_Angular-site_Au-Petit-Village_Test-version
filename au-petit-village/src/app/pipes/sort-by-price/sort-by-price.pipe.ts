import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe pour trier un tableau d'objets par prix.
 * Utilisation : {{ array | sortByPrice:order }}
 * @param array - Le tableau d'objets à trier.
 * @param order - L'ordre de tri ('asc' pour croissant, 'desc' pour décroissant).
 * @returns Le tableau trié.
 * 
 * Comportements :
 * - Si l'argument `array` n'est pas un tableau, retourne un tableau vide.
 * - Si l'argument `order` est 'asc', trie les objets par prix croissant.
 * - Si l'argument `order` est 'desc', trie les objets par prix décroissant.
 * - Si l'argument `order` n'est ni 'asc' ni 'desc', ne trie pas le tableau.
 * - L'argument `order` est facultatif et par défaut 'asc'.
 * - L'argument `order` accepte les valeurs en minuscules ou majuscules.
 */

@Pipe({
  name: 'sortByPrice',
  standalone: false
})
export class SortByPricePipe implements PipeTransform {

  transform(array: any[], order: string = 'asc'): any[] {
    if (!Array.isArray(array)) {
      return [];
    }
    order = order.toLowerCase(); // Convertir l'argument en minuscules
    array.sort((a: any, b: any) => {
      if (order === 'asc') {
        return a.price - b.price;
      } else if (order === 'desc') {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
    return array;
  }
}
