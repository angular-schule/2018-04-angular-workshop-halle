import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { BookComponent } from './book.component';
import { Book } from '../shared/book';

/*
// Beispiel: Testkomponente für Integrationstest
@Component({
  selector: 'br-test',
  template: `<br-book [book]="book" (rated)="onRated($event)"></br-book>`
})
class TestComponent {
  book: Book = {
    isbn: '',
    title: '',
    description: '',
    rating: 5
  };

  onRated(book: Book) {
  }
}
*/

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .overrideComponent(BookComponent, { // override nötig wegen OnPush
      set: {
        changeDetection: ChangeDetectionStrategy.Default
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    component.book = {
      isbn: '000',
      title: '',
      description: '',
      rating: 3
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct rating', () => {
    const ratingBox = fixture.debugElement.query(By.css('.testing-rating-box'));
    expect(ratingBox.nativeElement.textContent).toBe('3');

    component.book = { ...component.book, rating: 5 };
    fixture.detectChanges();
    expect(ratingBox.nativeElement.textContent).toBe('5');
  });

  it('should call rateUp() when button is clicked', () => {
    spyOn(component, 'rateUp').and.callThrough();

    const rateUpBtn = fixture.debugElement.query(By.css('.testing-rate-up-btn'));
    rateUpBtn.nativeElement.click();

    expect(component.rateUp).toHaveBeenCalled();
  });
});
