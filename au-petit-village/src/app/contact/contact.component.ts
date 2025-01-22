import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,

  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  isFormValid: boolean = false;

  ngOnInit(): void { }

  onSubmit(form: any): void {
    if (form.checkValidity()) {
      // Traitez les données du formulaire ici
      console.log(form);
      // Affichez un message de confirmation dans la console
      alert('Votre message a été envoyé avec succès.');
    } else {
      // Affichez des messages d'erreur
      form.classList.add('was-validated');
      // Affiche un message d'erreur à l'écran
      alert("Le message n'a pas pu être envoyé !");
    }
  }
  checkFormValidity(form: any): void {
    this.isFormValid = form.checkValidity();
  }
}
