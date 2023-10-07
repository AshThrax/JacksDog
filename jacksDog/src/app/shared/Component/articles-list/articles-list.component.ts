import { Component } from '@angular/core';
import { Article } from '../../class/article';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent {

  items: Article[]=[
    {
      titre:'presentation',
      content: 'eziofzeobdfzodnkodfnikdfznkfdnkldfzknlmdzf',
      image:'https://static.vecteezy.com/system/resources/thumbnails/005/857/332/small/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg'},
    {
      titre:'agrou',
      content:' I have climbed highest mountains I have run through the fields Only to be with you Only to be with you I have run I have crawled I have scaled these city walls These city walls Only to be with you',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJcwpPUvhpRJ88lUO1s6xlOIp64H8kgEHNA&usqp=CAU'
    }
  ]
  }


