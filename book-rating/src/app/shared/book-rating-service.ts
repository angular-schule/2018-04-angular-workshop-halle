import { Book } from './book';

export class BookRatingService {
  private minRating = 1;
  private maxRating = 5;

  rateUp(book: Book): Book {
    return { ...book, rating: Math.min(this.maxRating, book.rating + 1) };
  }

  rateDown(book: Book): Book {
    return { ...book, rating: Math.max(this.minRating, book.rating - 1) };
  }

  rateUpAllowed(book: Book) {
    return book.rating < this.maxRating;
  }

  rateDownAllowed(book: Book) {
    return book.rating > this.minRating;
  }

}
