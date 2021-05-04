import { Component } from '@angular/core';
import { NewsDataService } from '../news-data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent {

  constructor(private httpp:NewsDataService) { }
  data:any;
  imgSrc:any;

  getNews(){
    return this.httpp.getData().subscribe(
      data => {
        this.data = data.articles;
        console.log(data)
      }

      
    )
  }

}
