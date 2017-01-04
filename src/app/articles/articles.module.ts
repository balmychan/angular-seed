import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '@app/shared/shared.module';

import {
  ArticleIndexPageComponent,
  ArticleShowPageComponent
} from './containers';

import {
  ArticleDetailComponent,
  ArticleListComponent,
} from './components';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    // Containers
    ArticleIndexPageComponent,
    ArticleShowPageComponent,
    // Components
    ArticleDetailComponent,
    ArticleListComponent,
  ],
  exports: [
    // Containers
    ArticleIndexPageComponent,
    ArticleShowPageComponent,
  ]
})
export class ArticlesModule { }