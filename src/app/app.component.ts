import { Component } from '@angular/core';

@Component({
  selector: 'sample-app',
  template: `
<sample-header></sample-header>
<main class="app-main">
  <router-outlet></router-outlet>
</main>
<sample-footer></sample-footer>
`,
  styles: [require('./app.component.scss')],
})
export class AppComponent {
}