import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {
  FooterComponent,
  HeaderComponent,
} from './components';
import {
  ArticleService,
} from './services';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [
    // Components
    FooterComponent,
    HeaderComponent,
    // Directives
    // Pipes
  ],
  providers: [
    ArticleService
  ],
  exports: [
    // Components
    FooterComponent,
    HeaderComponent,
    // Directives
    // Pipes
  ]
})
export class SharedModule { }