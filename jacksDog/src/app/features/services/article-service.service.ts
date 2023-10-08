import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/shared/class/article';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService  {
ObArticle!: Observable<Article[]>;
title= 'article-Json';
data !:any;
url="assets/json/services.json";
  constructor(private Http: HttpClient) {

    }
  getData(): Observable<Article[]>{
      return this.Http.get<Article[]>(this.url);
  }

}

