import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable()
export class BookStoreMockService {

  constructor() { }

  getAllStatic(): Book[] {
    return [
      {
        isbn: '000',
        title: 'Vue.js',
        description: 'Grundlagen, fortgeschrittene Techniken, ...',
        rating: 5
      },
      {
        isbn: '111',
        title: 'Knockout',
        description: 'Ein anderes Framework',
        rating: 3
      }
    ];
  }

}
