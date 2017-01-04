import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  ArticleIndexPageComponent,
  ArticleShowPageComponent
} from './articles/containers';

export const routes: Routes = [
  { path: '', redirectTo: 'a', pathMatch: 'full' },
  { path: 'a', component: ArticleIndexPageComponent },
  { path: 'a/:id', component: ArticleShowPageComponent },
];

export const routing = RouterModule.forRoot(routes);