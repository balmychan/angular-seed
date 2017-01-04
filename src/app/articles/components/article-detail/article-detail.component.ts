import { Component, Input } from '@angular/core';
import { Article } from '@app/shared/models';

@Component({
  selector: 'sample-article-detail',
  template: `
<div>
  <h1 class="title">{{ article?.title }}</h1>
  <p class="description">{{ article?.description }}</p>
</div>
  `,
  styles: [require('./article-detail.component.scss')],
})
export class ArticleDetailComponent {
  @Input() article: Article;
}
