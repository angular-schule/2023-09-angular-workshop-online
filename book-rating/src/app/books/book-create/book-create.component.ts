import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-book-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent {
  bookForm = new FormGroup({
    isbn: new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(/^[0-9]*$/),
        Validators.minLength(10),
        Validators.maxLength(13)
      ]
    }),
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.maxLength(80)]
    }),
    description: new FormControl('', { nonNullable: true }),
    rating: new FormControl(3, {
      nonNullable: true,
      validators: [
        Validators.min(1),
        Validators.max(5)
      ]
    }),
    price: new FormControl(0, {
      nonNullable: true,
      validators: [Validators.required, Validators.min(0)]
    }),
  });


  isInvalid(controlName: string): boolean {
    const control = this.bookForm.get(controlName);

    if (!control) {
      return false;
    }

    return control.invalid && control.touched;
  }

  isInvalidAlternativ(controlName: keyof typeof this.bookForm.controls): boolean {
    const control = this.bookForm.controls[controlName];
    return control.invalid && control.touched;
  }


  hasError(controlName: string, errorCode: string): boolean {
    // "Hat dieses Control diesen Fehler?"

    const control = this.bookForm.get(controlName);

    if (!control) {
      return false;
    }

    return control.hasError(errorCode) && control.touched;
  }

}



/*
TODO:
- Fehlermeldungen anzeigen
  - "ISBN ist ungültig"
  - "ISBN ist zu kurz"
- Submit-Button
- abschicken
- Buch erstellen
- HTTP
- bei Erfolg:
  - wegnavigieren, z. B. zum Dashboard oder Detailseite
  - Meldung anzeigen
  - zurücksetzen

*/
