import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating-service';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  rs = new BookRatingService();

  @Input() book: Book;

  constructor() { }

  ngOnInit() {
  }

  getStarsArray() {
    return new Array(this.book.rating);
  }

  rateUp() {
    this.book = this.rs.rateUp(this.book);
  }

  rateDown() {
    this.book = this.rs.rateDown(this.book);
  }

}
