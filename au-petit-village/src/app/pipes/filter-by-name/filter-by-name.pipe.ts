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
  transform(array: any[], searchTerm: string): any[] {
    if (!Array.isArray(array) || !searchTerm) {
      return array;
    }
    return array.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }
}
