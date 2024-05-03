import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public title: string = 'Counter Angular';
  public counter: number = 0;

  increaseBy(value: number): void {
    if (value < 0 && this.counter <= 0) return;
    this.counter += value;
  }

  resetBy(): void {
    this.counter = 0;
  }
}
