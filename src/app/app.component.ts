import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title: string = 'Angular app';
  public counter: number = 0;

  increaseBy(value: number): void {
    if (value < 0 && this.counter <= 0) return;
    this.counter += value;
  }

  resetBy(): void {
    this.counter = 0;
  }
}
