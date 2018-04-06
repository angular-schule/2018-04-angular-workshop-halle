import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  url = 'https://angular.schule';
  d = new Date();

  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Grundlagen, fortgeschrittene Techniken, ...',
        rating: 5
      },
      {
        isbn: '111',
        title: 'React',
        description: 'Ein anderes Framework',
        rating: 3
      }
    ];
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
