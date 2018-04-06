import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  url = 'https://angular.schule';
  d = new Date();

  books: Book[];

  constructor(private bs: BookStoreService) {}

  ngOnInit() {
    this.books = this.bs.getAllStatic();
  }

  trackBook(index: number, item: Book) {
    return item.isbn;
  }

  updateSortList(book: Book) {
    // Ansatz 1
    this.books = this.books
      .map(b => b.isbn === book.isbn ? book : b)
      .sort((a, b) => b.rating - a.rating);

    // Ansatz 2
    // const cleanedList = this.books.filter(b => b.isbn !== book.isbn);
    // this.books = [...cleanedList, book].sort((a, b) => b.rating - a.rating);
  }

  addBook(book: Book) {
    this.books = [...this.books, book].sort((a, b) => b.rating - a.rating);
  }

}


/*

ISBN
Title
Rating
Description

Author(s)
Erscheinungsjahr
Seitenzahl
Preis
Subtitle
...
*/
