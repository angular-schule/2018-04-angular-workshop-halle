import { Component } from '@angular/core';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello Book Rating!';

  constructor() {
    /*setTimeout(() => {
      this.title = 'HALLO HALLE!';
    }, 2000);*/
  }
}
