import {Component, HostBinding, Input, OnInit} from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';

  @Input() article: Article;

  constructor() {
         }

  voteUp(): boolean {
    this.article.voteUp(); /** Inside the article class for encapsulating the logic */
    return false; /** For avoiding the page from refreshing. */
  }
  voteDown(): boolean {
    this.article.voteDown(); /** Inside the article class for encapsulating the logic */
    return false; /** For avoiding the page from refreshing. */
  }

  ngOnInit() {
  }

}
