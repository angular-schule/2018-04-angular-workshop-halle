import { BookComponent } from './book.component';
import { BookRatingService } from '../shared/book-rating-service';
import { Book } from '../shared/book';

describe('BookComponent (simple)', () => {

  let component: BookComponent;

  beforeEach(() => {
    component = new BookComponent();
  });

  it('should forward rateUp call to the RatingService', () => {
    component.rs = {
      rateUp: (book: Book) => book
    } as BookRatingService;

    spyOn(component.rs, 'rateUp').and.callThrough();
    component.rateUp();

    expect(component.rs.rateUp).toHaveBeenCalled();
  });

  it('should throw rated event for rateUp', () => {
    component.rs = {
      rateUp: (book: Book) => book
    } as BookRatingService;

    component.book = {
      isbn: '', title: '', description: '', rating: 5
    };

    let _book: Book;

    component.rated.subscribe(b => {
      _book = b;
    });

    component.rateUp();

    expect(_book).toBe(component.book);
  });
});
