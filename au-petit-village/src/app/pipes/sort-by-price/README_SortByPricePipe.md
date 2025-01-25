# Documentation des Pipes

## Pipe de Tri par Prix (SortByPricePipe)

### Description

Le pipe `SortByPricePipe` permet de trier un tableau d'objets par prix. Il prend en charge le tri croissant et décroissant.

### Utilisation

Pour utiliser le pipe, ajoutez-le à votre module Angular et utilisez-le dans vos templates.

### Exemple

```html
<!-- Template HTML -->
<div>
  <select [(ngModel)]="sortOrder">
    <option value="">Sans tri</option>
    <option value="asc">Prix croissant</option>
    <option value="desc">Prix décroissant</option>
  </select>
  <ul>
    <li *ngFor="let product of products | sortByPrice:sortOrder">
      {{ product.name }} - {{ product.price }} €
    </li>
  </ul>
</div>
```
