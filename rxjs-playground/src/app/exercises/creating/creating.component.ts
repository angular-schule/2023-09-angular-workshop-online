import { Component } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject, map, filter, Subscriber, Observer } from 'rxjs';
import { HistoryComponent } from '../../shared/history/history.component';

@Component({
  templateUrl: './creating.component.html',
  standalone: true,
  imports: [HistoryComponent]
})
export class CreatingComponent {

  logStream$ = new ReplaySubject<string | number>();

  constructor() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor "new Observable()" nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/


    function producer(sub: Subscriber<number>) {
      const result = Math.random();
      sub.next(result);
      sub.next(10);
      sub.next(20);
      sub.next(30);

      setTimeout(() => sub.next(100), 2000)
      setTimeout(() => sub.complete(), 4000)
    }

    const obs: Observer<number> = {
      next: e => console.log(e),
      error: (err: any) => console.error(err),
      complete: () => console.log('FERTIG'),
    };

    // producer(obs);

    const myObs$ = new Observable(producer);
    myObs$.subscribe(obs);

    myObs$.subscribe({
      next: e => console.log(e),
      error: (err: any) => console.error(err)
    });

    myObs$.subscribe(e => console.log(e));


    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
