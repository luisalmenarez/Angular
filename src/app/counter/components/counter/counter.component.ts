import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="grid place-items-center">
      <h3 class="font-bold mb-4">{{ counter }}</h3>
      <div class="flex gap-4">
        <button
          (click)="increaseBy(1)"
          class="bg-blue-500 hover:bg-blue-700 duration-300 text-white font-bold py-2 px-4 rounded"
        >
          Increase
        </button>
        <button
          (click)="resetBy()"
          class="bg-green-500 hover:bg-green-700 duration-300 text-white font-bold py-2 px-4 rounded"
        >
          Reset
        </button>
        <button
          (click)="increaseBy(-1)"
          class="bg-red-500 hover:bg-red-700 duration-300 text-white font-bold py-2 px-4 rounded"
        >
          Decrease
        </button>
      </div>
    </div>
  `,
})
export class CounterComponent {
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
