import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
})
export class SignalComponent {
  firstName = signal('Dener');
  lastName = signal('Troquatte');

  fullName = computed(() => {
    return this.firstName() + this.lastName();
  });

  array = signal([1]);

  constructor() {}

  updateName() {
    return this.firstName.set('Gabriel');
  }

  updateArray() {
    this.array.update((oldValue: number[]) => {
      console.log(oldValue);

      return [...oldValue, oldValue.length + 1];
    });
  }
}
