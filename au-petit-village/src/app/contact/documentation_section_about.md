# Documentation des différentes approches pour la section "À Propos de Nous"

Ce document présente les différentes méthodes pour coder la section "À Propos de Nous" (`.about-details`) du composant `about.component`. Les différentes alternatives donnent le même rendu à l'affichage _responsive design_, consistant à aafficher des lignes composées d'une image et d'un texte positionné alternativement à gauche et à droite.
Ce document de conception met en évidence l'utilisation d'un service de données.

Tous les codes sont fonctionnels. Cependant, le dernier a été retenu conformément à l'analyse des avantages et inconvenients.

## Sommaire

- [Documentation des différentes approches pour la section "À Propos de Nous"](#documentation-des-différentes-approches-pour-la-section-à-propos-de-nous)
  - [Sommaire](#sommaire)
  - [1. Version initiale (sans utiliser le service de données)](#1-version-initiale-sans-utiliser-le-service-de-données)
    - [1.1. Description](#11-description)
    - [1.2. Avantages](#12-avantages)
    - [1.3. Inconvénients](#13-inconvénients)
    - [1.4. Code](#14-code)
  - [2. Version synthétique extrême (en utilisant le service de données)](#2-version-synthétique-extrême-en-utilisant-le-service-de-données)
    - [2.1. Description](#21-description)
    - [2.2. Avantages](#22-avantages)
    - [2.3. Inconvénients](#23-inconvénients)
    - [2.4. Code](#24-code)
  - [3. Version développée (en utilisant le service de données)](#3-version-développée-en-utilisant-le-service-de-données)
    - [3.1. Description](#31-description)
    - [3.2. Avantages](#32-avantages)
    - [3.3. Inconvénients](#33-inconvénients)
    - [3.4. Code](#34-code)
  - [4. Version développée et simple pour maintenance (en utilisant le service de données)](#4-version-développée-et-simple-pour-maintenance-en-utilisant-le-service-de-données)
    - [4.1. Description](#41-description)
    - [4.2. Avantages](#42-avantages)
    - [4.3. Inconvénients](#43-inconvénients)
    - [4.4. Code](#44-code)

## 1. Version initiale (sans utiliser le service de données)

### 1.1. Description

Cette version utilise des données statiques directement dans le template HTML.

### 1.2. Avantages

- Simple à mettre en œuvre.

### 1.3. Inconvénients

- Difficile à maintenir et à mettre à jour.

### 1.4. Code

```html
    <section class="about-details">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-2 col-sm-3 col-md-5 text-center">
                    <img src="/images/banner/figurine-gaulois-suivez-moi.jpg" class="img-fluid rounded about-image" alt="Figurine Gaulois pointant le texte">
                </div>
                <div class="col-10 col-sm-9 col-md-7">
                    <h2>Notre Histoire</h2>
                    <p>“Au petit village” est une entreprise qui confectionne des figurines inspirées de la bande dessinée Astérix et Obélix. Fondée par des passionnés de l'univers des célèbres Gaulois, notre entreprise vise à raviver la nostalgie des aventures d'Astérix et Obélix chez les jeunes adultes âgés de 30 à 55 ans.</p>
                    <p>Depuis notre création, nous nous efforçons de produire des figurines de haute qualité qui capturent l'essence des personnages emblématiques de la bande dessinée. Chaque figurine est soigneusement conçue et fabriquée avec une attention particulière aux détails, afin de garantir une expérience authentique et immersive pour nos clients.</p>
                    <p>Dernièrement, nous avons fait évolué notre panoplie de figurines en ajoutant un personnage Gaulois que nous mettons en situation humoristique afin de mettre en évidence la modernité et l'authenticité de nos personnages </p>
                </div>
            </div>
            <div class="row mt-5 align-items-center">
                <div class="col-md-6">
                    <h2>Nos Valeurs</h2>
                    <p>Chez “Au petit village”, nous croyons en l'importance de la qualité, de l'authenticité et de la satisfaction de nos clients. Nous nous engageons à :</p>
                    <ul>
                        <li>Produire des figurines de haute qualité qui respectent l'esprit et l'humour de la bande dessinée originale.</li>
                        <li>Offrir un service client exceptionnel et personnalisé.</li>
                        <li>Encourager la créativité et l'imagination à travers nos produits.</li>
                        <li>Respecter l'environnement en utilisant des matériaux durables et des pratiques de fabrication responsables.</li>
                    </ul>
                </div>
                <div class="col-md-6">
                    <img src="/images/banner/figurine-nos-heros.jpg" class="img-fluid rounded" alt="Figurine des héros Gaulois">
                </div>
            </div>
        </div>
    </section>
```

## 2. Version synthétique extrême (en utilisant le service de données)

### 2.1. Description

Cette version utilise le service de données pour charger dynamiquement les informations.

### 2.2. Avantages

- Facile à maintenir et à mettre à jour.

### 2.3. Inconvénients

- Peut être moins lisible pour les développeurs non familiers avec Angular.

### 2.4. Code

```html
    <section class="about-details">
        <div class="container">
            <div class="row align-items-center" *ngFor="let step of history; let i = index">
                <div
                    [ngClass]="{'col-2 col-sm-3 col-md-5 text-center': i % 2 === 0, 'col-md-6 order-2 text-center': i % 2 !== 0}">
                    <img [src]="step.item.imageUrl" class="img-fluid rounded about-image" [alt]="step.item.imageAlt">
                </div>
                <div [ngClass]="{'col-10 col-sm-9 col-md-7': i % 2 === 0, 'col-md-6 order-1 py-3': i % 2 !== 0}">
                    <h2>{{ step.item.title }}</h2>
                    <div *ngFor="let desc of step.item.description">
                        <p>{{ desc.content }}</p>
                        <ul *ngIf="desc.alinea.length > 0">
                            <li *ngFor="let alinea of desc.alinea">{{ alinea }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

## 3. Version développée (en utilisant le service de données)

### 3.1. Description

Cette version utilise le service de données et alterne l'affichage des images à gauche et à droite en développant chaque ligne de rendu.

### 3.2. Avantages

- Lisible et maintenable.

### 3.3. Inconvénients

- Peut être plus complexe à mettre en œuvre.

### 3.4. Code

```html
    <section class="about-details">
        <div class="container">
            <div class="row align-items-center" *ngFor="let step of history; let i = index">
                <div *ngIf="i % 2 === 0" class="col-2 col-sm-3 col-md-5 text-center">
                    <img [src]="step.item.imageUrl" class="img-fluid rounded about-image" [alt]="step.item.imageAlt">
                </div>
                <div *ngIf="i % 2 === 0" class="col-10 col-sm-9 col-md-7">
                    <h2>{{ step.item.title }}</h2>
                    <div *ngFor="let desc of step.item.description">
                        <p>{{ desc.content }}</p>
                        <ul *ngIf="desc.alinea.length > 0">
                            <li *ngFor="let alinea of desc.alinea">{{ alinea }}</li>
                        </ul>
                    </div>
                </div>
                <div *ngIf="i % 2 !== 0" class="col-md-6 order-2 text-center py-3">
                    <img [src]="step.item.imageUrl" class="img-fluid rounded about-image" [alt]="step.item.imageAlt">
                </div>
                <div *ngIf="i % 2 !== 0" class="col-md-6 order-1 py-3">
                    <h2>{{ step.item.title }}</h2>
                    <div *ngFor="let desc of step.item.description">
                        <p>{{ desc.content }}</p>
                        <ul *ngIf="desc.alinea.length > 0">
                            <li *ngFor="let alinea of desc.alinea">{{ alinea }}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
```

## 4. Version développée et simple pour maintenance (en utilisant le service de données)

### 4.1. Description

Cette version utilise le service de données et alterne l'affichage des images à gauche et à droite, avec une structure de code simplifiée.

### 4.2. Avantages

- Lisible, maintenable et simple à mettre en œuvre.

### 4.3. Inconvénients

- Aucun.

### 4.4. Code

```html
    <section class="about-details">
        <div class="container">
            <div class="row align-items-center" *ngFor="let step of history; let i = index">
                <div *ngIf="i % 2 === 0" class="row">
                    <div class="col-2 col-sm-3 col-md-5 text-center">
                        <img [src]="step.item.imageUrl" class="img-fluid rounded about-image"
                            [alt]="step.item.imageAlt">
                    </div>
                    <div class="col-10 col-sm-9 col-md-7">
                        <h2>{{ step.item.title }}</h2>
                        <div *ngFor="let desc of step.item.description">
                            <p>{{ desc.content }}</p>
                            <ul *ngIf="desc.alinea.length > 0">
                                <li *ngFor="let alinea of desc.alinea">{{ alinea }}</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div *ngIf="i % 2 !== 0" class="row py-3">
                    <div class="col-md-6 order-md-1">
                        <h2>{{ step.item.title }}</h2>
                        <div *ngFor="let desc of step.item.description">
                            <p>{{ desc.content }}</p>
                            <ul *ngIf="desc.alinea.length > 0">
                                <li *ngFor="let alinea of desc.alinea">{{ alinea }}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-6 order-md-2 text-center">
                        <img [src]="step.item.imageUrl" class="img-fluid rounded about-image"
                            [alt]="step.item.imageAlt">
                    </div>
                </div>
            </div>
        </div>
    </section>
```
