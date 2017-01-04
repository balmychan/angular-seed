import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Article } from '../models';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ArticleService {
  constructor(
    private http: Http
  ) {
  }
}
