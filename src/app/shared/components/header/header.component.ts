import { Component } from '@angular/core';

@Component({
    selector: 'sample-header',
    template: `
<header>
  <h1>angular-seed-a11</h1>
</header>
    `,
    styles: [require('./header.component.scss')],
})
export class HeaderComponent {
}