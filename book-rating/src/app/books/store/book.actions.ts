import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book } from '../shared/book';

export const BookActions = createActionGroup({
  source: 'Book',
  events: {
    'Load Books': emptyProps(),
    'Load Books Success': props<{ data: Book[] }>(),
    'Load Books Failure': props<{ error: unknown }>(),
  }
});
