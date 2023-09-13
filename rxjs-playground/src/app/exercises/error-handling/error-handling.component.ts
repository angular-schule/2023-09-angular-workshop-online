import { Component } from '@angular/core';
import { ReplaySubject, throwError, of, EMPTY, retry, catchError } from 'rxjs';

import { ExerciseService } from '../exercise.service';
import { HistoryComponent } from '../../shared/history/history.component';

@Component({
  templateUrl: './error-handling.component.html',
  standalone: true,
  imports: [HistoryComponent]
})
export class ErrorHandlingComponent {

  logStream$ = new ReplaySubject<unknown>();

  constructor(private es: ExerciseService) { }

  /**
   * Das Observable aus `this.es.randomError()` liefert mit hoher Wahrscheinlichkeit einen Fehler.
   * Probiere verschiedene Strategien aus, um den Fehler zu behandeln:
   * - wiederholen
   * - Fehler weiterwerfen
   * - Fehler umwandeln (in ein normales Element)
   * - Fehler verschlucken/ignorieren
   */

  start() {
    this.es.randomError().pipe(
      catchError(err => {
        // irgendwas tun, z.B. Logging, Meldung, …


        // Was passiert mit dem Fehler?
        // Fehler ignorieren (ersetzen durch "nichts")
        // return EMPTY;

        // Fehler ersetzen
        // return of('Nichts', 'passiert');

        // Fehler weiterwerfen
        // return throwError(() => 'FEHLER!'); // new Observable(sub => sub.error('FEHLER'))
        throw 'BÖSER FEHLER!';
      })
    ).subscribe({
      next: e => this.logStream$.next(e),
      error: err => this.logStream$.next('❌ ERROR: ' + err)
    });
  }
}
