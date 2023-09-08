import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(() => {

    // Stub für BookRatingService
    const ratingMock = {
      rateUp: (b: Book) => b,
      rateDown: (b: Book) => b,
    }

    TestBed.configureTestingModule({
      imports: [DashboardComponent],
      providers: [
        // BRS ersetzen: Wenn Service angefordert wird,
        // wird stattdessen ratingMock ausgeliefert
        { provide: BookRatingService, useValue: ratingMock }
      ]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    // TS-Klasseninstanz
    component = fixture.componentInstance;

    // DOM-Element
    // fixture.nativeElement

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service.rateUp for component.doRateUp', () => {
    // Arrange
    // das ist eigentlich der ratingMock
    const rs = TestBed.inject(BookRatingService);

    // Buch
    const testBook = { isbn: '123' } as Book; // Type Assertion

    // Methode präparieren: rs.rateUp überwachen
    // spyOn(rs, 'rateUp').and.returnValue(testBook);
    // spyOn(rs, 'rateUp').and.callFake(b => b);
    spyOn(rs, 'rateUp').and.callThrough(); // Methode rateUp ersetzen, dabei aber trotzdem das "Original" verwenden, um den Wert zu generieren


    // Act
    component.doRateUp(testBook);

    // Assert
    // prüfen, ob Methode service.rateUp aufgerufen wurde
    expect(rs.rateUp).toHaveBeenCalled();
    expect(rs.rateUp).toHaveBeenCalledTimes(1);
    expect(rs.rateUp).toHaveBeenCalledWith(testBook);
    expect(rs.rateUp).toHaveBeenCalledOnceWith(testBook);
  });
});
