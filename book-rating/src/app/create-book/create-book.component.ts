import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  bookForm: FormGroup;

  // 1. Emitter anlegen ✅
  // 2. @Output() ✅
  // 2.5 Buch erzeugen ✅
  // 3. emitten ✅
  // 4. Event abonnieren ✅

  @Output() bookCreated = new EventEmitter<Book>();

  constructor() { }

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

    this.bookForm.valueChanges.subscribe(data => console.log(data));
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
