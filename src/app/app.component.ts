import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('entree', [
      // ...
      state('stable', style({
        opacity: 1,
      })),
      transition('* => stable', [
        animate('1s')
      ])
    ]),
  ]
})
export class AppComponent {
  title = 'tentative1';
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
