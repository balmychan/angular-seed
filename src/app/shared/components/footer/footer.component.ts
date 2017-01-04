import { Component } from '@angular/core';

@Component({
    selector: 'sample-footer',
    template: `
<footer>
  <div class="inner">
    <small>&copy; 2017 balmchan.</small>
  </div>
</footer>
    `,
    styles: [require('./footer.component.scss')],
})
export class FooterComponent {

}