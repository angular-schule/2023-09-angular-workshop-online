import { Routes } from '@angular/router';

// import { booksRoutes } from './books/books.routes';

export const routes: Routes = [
  // bei Weietrleitung vom leeren Pfad fast immer pathMatchFull nötig
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  // ...booksRoutes
  {
    path: 'books',
    loadChildren: () => import('./books/books.routes').then(m => m.booksRoutes)
  }
];





