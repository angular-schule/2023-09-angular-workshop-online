import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  // hier dürfen Daten von der Elternkomponente hineinfließen
  // von oben nach unten
  @Input() book?: Book;
}


/*
TODO
- Buch
- Template
*/
