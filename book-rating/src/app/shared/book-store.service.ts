import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; // v6: 'rxjs'
import { of } from 'rxjs/observable/of'; // v6: 'rxjs/create'
import { _throw } from 'rxjs/observable/throw'; // v6: 'rxjs/create'

import { Book } from './book';
import { catchError, delay } from 'rxjs/operators';

@Injectable()
export class BookStoreService {

  private api = 'http://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.api}/books`).pipe(
      catchError(err => {
        console.log('CATCH ERROR', err);
        return _throw('Ein Fehler ist aufgetreten');
      })
    );
  }

  search(searchTerm: string): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.api}/books/search/${searchTerm}`);
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<Book>(`${this.api}/book/${isbn}`);
  }

  getAllStaticObservable(): Observable<Book[]> {
    return of(this.getAllStatic()).pipe(delay(2000));
  }

  getAllStatic(): Book[] {
    return [
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

}
