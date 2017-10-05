import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  article: Article[];

  constructor() {
    this.article = [
      new Article('Book on UI', 'http://as.wiley.com/WileyCDA/WileyTitle/productCd-1118766571.html', 2),
      new Article('Book on UX', 'http://www.lulu.com/shop/daniel-ling/design-thinking-guide-for-successful-professionals/ebook/product-22638109.html', 4),
      new Article('Angular', 'https://angular.io/', 1),
    ];
  }

  addArticle( title: HTMLInputElement, link: HTMLInputElement ): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.article.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles(): Article[] {
      return this.article.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
