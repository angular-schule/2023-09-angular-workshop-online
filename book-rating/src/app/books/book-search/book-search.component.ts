import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BookStoreService } from '../shared/book-store.service';
import { Observable, debounceTime, filter, switchMap } from 'rxjs';
import { Book } from '../shared/book';

@Component({
  selector: 'app-book-search',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent {
  searchControl = new FormControl('', { nonNullable: true });
  books$: Observable<Book[]>;

  constructor(private bs: BookStoreService) {
    this.books$ = this.searchControl.valueChanges.pipe(
      filter(term => term.length >= 3),
      debounceTime(1000),
      switchMap(term => this.bs.search(term))
    );
  }
}
