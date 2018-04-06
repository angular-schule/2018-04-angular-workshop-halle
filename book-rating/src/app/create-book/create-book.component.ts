import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../shared/book';
import { interval } from 'rxjs/observable/interval';
import { map, filter, debounceTime, distinctUntilChanged, buffer, switchMap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  bookForm: FormGroup;

  results$: Observable<Book[]>;

  interval$ = interval(2000);
  timers = [];

  subject$ = new Subject<string>();

  // 1. Emitter anlegen ✅
  // 2. @Output() ✅
  // 2.5 Buch erzeugen ✅
  // 3. emitten ✅
  // 4. Event abonnieren ✅

  @Output() bookCreated = new EventEmitter<Book>();


  subscription1: Subscription;

  addTimer() {
    this.timers.push('');
    this.subject$.next('fooo');
  }

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(12)
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl('')
    });

    this.results$ = this.bookForm.valueChanges.pipe(
      map(value => value.isbn),
      // filter(isbn => isbn.startsWith('1')),
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap(searchTerm => this.bs.search(searchTerm))
    );


    this.subject$.subscribe(e => console.log(e));

  }

  submitForm() {
    if (this.bookForm.valid) {
      const value = this.bookForm.value;

      const newBook: Book = {
        isbn: value.isbn,
        title: value.title,
        description: value.description,
        rating: 1
      };

      this.bookCreated.emit(newBook);
      this.bookForm.reset({
        isbn: '',
        title: '',
        description: ''
      });
    }
  }


}
