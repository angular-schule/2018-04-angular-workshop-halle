import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, delay } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;
  book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private bs: BookStoreService
  ) { }

  ngOnInit() {
    // this.route.params.subscribe(params => this.isbn = params.isbn);

    this.book$ = this.route.params.pipe(
      map(params => params.isbn),
      switchMap(isbn => this.bs.getSingle(isbn)),
      delay(1000) // DEBUG
    );

  }

}
