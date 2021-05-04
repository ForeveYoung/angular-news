import { Component, OnInit } from '@angular/core';
import { NewsDataService } from '../news-data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.less']
})
export class NewsComponent implements OnInit {

  constructor(private httpp:NewsDataService) { }
  data:any;
  imgSrc:any;

  ngOnInit(){
    return this.httpp.getData().subscribe(
      data => {
        this.data = data.articles;
      }
    )
  }

}
