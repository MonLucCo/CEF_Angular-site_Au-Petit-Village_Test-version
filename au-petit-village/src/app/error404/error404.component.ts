import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error404',
  standalone: false,

  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Vérifier si l'URL actuelle n'est pas /error404
    if (this.router.url !== '/error404') {
      // Naviguer vers /error404
      this.router.navigate(['/error404']);
    }
  }
}
