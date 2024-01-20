import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template-binding/template-binding.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';
import { SignalComponent } from './components/signal/signal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NewComponent,
    TemplateBindingComponent,
    TemplateDeferrableViewsComponent,
    SignalComponent,
  ],
  template: `
    <!-- <router-outlet></router-outlet>  -->
    <h1>Curso de Angular</h1>
    <app-signal />
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
