import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '@app/shared/models';
import { ArticleService } from '@app/shared/services';

@Component({
  selector: 'sample-article-index',
  template: `
<div class="body">
  <sample-article-list (articleClick)="onArticleClick($event)" [articleList]="articleList"></sample-article-list>
</div>
`,
  styles: [require('./article-index.page.component.scss')],
  // styleUrls: ['./article-index.page.component.scss'],
})
export class ArticleIndexPageComponent {
  private articleList: Article[];
  constructor(
    private router: Router,
    private articleService: ArticleService
  ) {
  }

  ngOnInit() {
    this.articleList = [
      { id: 1, title: 'A', description: 'AAAAA' },
      { id: 2, title: 'B', description: 'BBBBB' },
      { id: 3, title: 'C', description: 'CCCCC' },
    ];
  }

  onArticleClick(article: Article) {
    this.router.navigate(['/a', article.id]);
  }
}
