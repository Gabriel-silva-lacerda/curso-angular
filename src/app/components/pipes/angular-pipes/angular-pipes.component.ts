import {
  AsyncPipe,
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  UpperCasePipe,
  registerLocaleData,
} from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';
import { CustomStringPipe } from '../../../pipes/custom-string.pipe';

@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    JsonPipe,
    AsyncPipe,
    CurrencyPipe,
    DecimalPipe,
    PercentPipe,
    CustomStringPipe,
  ],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
})
export class AngulasPipesComponent {
  date = signal(new Date());
  json = signal([
    {
      name: 'Gabriel',
    },
  ]);
}
