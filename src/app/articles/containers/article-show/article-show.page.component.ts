import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '@app/shared/models'
import { ArticleService } from '@app/shared/services'

@Component({
  selector: 'sample-article-show',
  template: `
<div class="back">
  <a class="back-button" [routerLink]="['/a']">&lt; Back</a>
</div>
<div class="body">
  <sample-article-detail class="main" [article]="article"></sample-article-detail>
</div>
`,
  styles: [require('./article-show.page.component.scss')],
})
export class ArticleShowPageComponent {
  article: Article;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
    });
  }
}
