import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { BookActions } from './book.actions';
import { BookStoreService } from '../shared/book-store.service';


@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(
      // wenn Action loadBooks kommt
      ofType(BookActions.loadBooks),
      // Bücher laden
      switchMap(() => this.bs.getAll().pipe(
        // loadBookSuccess auslösen mit Book[]
        map(books => BookActions.loadBooksSuccess({ data: books }))
      ))
    );
  });


  constructor(private actions$: Actions, private bs: BookStoreService) {}
}
