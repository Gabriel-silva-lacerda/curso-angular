import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss',
})
export class OutputComponent {
  @Output() outputName = new EventEmitter();

  sendOutput() {
    return this.outputName.emit('Gabriel Silva 007');
  }
}
