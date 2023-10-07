import { Component, Input } from '@angular/core';
import { Article } from '../../class/article';
@Component({
  selector: 'app-articles-single',
  templateUrl: './articles-single.component.html',
  styleUrls: ['./articles-single.component.css']
})
export class ArticlesSingleComponent {

  @Input(({ required: true }))
  unitem!: Article;

  constructor()
  {

  }
}
