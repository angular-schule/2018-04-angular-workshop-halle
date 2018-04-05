import { BookComponent } from './book.component';
import { BookRatingService } from '../shared/book-rating-service';
import { Book } from '../shared/book';

describe('BookComponent (simple)', () => {

  let component: BookComponent;

  beforeEach(() => {
    component = new BookComponent();
  });

  it('should forward rateUp call to the RatingService', () => {
    let ratingWasCalled = false;

    component.rs = {
      rateUp: (book: Book) => {
        ratingWasCalled = true;
        return book;
      }
    } as BookRatingService;

    component.rateUp();

    expect(ratingWasCalled).toBe(true);

  });
});
