import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  name = signal('Sem dados');
  @Input({
    required: true,
  })
  set inputName(value: string) {
    this.name.set(value);
  }
}
