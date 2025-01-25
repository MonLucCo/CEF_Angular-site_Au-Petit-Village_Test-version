# Documentation des Pipes

## Pipe de Filtrage par Nom (FilterByNamePipe)

### Description

Le pipe `FilterByNamePipe` permet de filtrer une liste de produits en fonction des tags sélectionnés. Ce pipe est utile pour afficher uniquement les produits correspondant à un terme `searchTerm` spécifique définit en paramètre.

### Utilisation

Pour utiliser le pipe, ajoutez-le à votre module Angular et utilisez-le dans vos templates.

### Exemple

```html
<!-- Template HTML -->
<div>
  <input type="text" [(ngModel)]="searchTerm" placeholder="Rechercher par nom">
  <ul>
    <li *ngFor="let product of products | filterByName:searchTerm">
      {{ product.name }} - {{ product.price }} €
    </li>
  </ul>
</div>
```
