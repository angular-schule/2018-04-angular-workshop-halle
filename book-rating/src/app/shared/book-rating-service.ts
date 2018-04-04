import { Book } from './book';

export class BookRatingService {
  rateUp(book: Book): Book {
    return { ...book, rating: book.rating + 1 };
  }

  rateDown(book: Book): Book {
    return { ...book, rating: book.rating - 1 };
  }

}
