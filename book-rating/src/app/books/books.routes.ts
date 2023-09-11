import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookSearchComponent } from './book-search/book-search.component';

export const booksRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'create', component: BookCreateComponent },
  { path: 'search', component: BookSearchComponent },
  { path: ':isbn', component: BookDetailsComponent },
];
