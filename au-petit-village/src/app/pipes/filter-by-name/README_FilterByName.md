# Documentation des Pipes

## Pipe de Filtrage par Nom (FilterByNamePipe)

### Description

Le pipe `FilterByNamePipe` permet de filtrer un tableau d'objets par nom en utilisant une recherche par "contient ...".

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
