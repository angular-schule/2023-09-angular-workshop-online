import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCreateComponent } from './book-create.component';

describe('BookCreateComponent', () => {
  let component: BookCreateComponent;
  let fixture: ComponentFixture<BookCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BookCreateComponent]
    });
    fixture = TestBed.createComponent(BookCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
