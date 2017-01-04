import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '@app/shared/models';

@Component({
  selector: 'sample-article-list',
  template: `
<article>
  <ul>
    <li *ngFor="let article of articleList">
      <a (click)="articleClicks.emit(article)">{{ article?.title }}</a>
    </li>
  </ul>
</article>
  `,
  styles: [require('./article-list.component.scss')],
})
export class ArticleListComponent {
  @Input() articleList: Article[];
  @Output('articleClick') articleClicks = new EventEmitter<Article>();
}
