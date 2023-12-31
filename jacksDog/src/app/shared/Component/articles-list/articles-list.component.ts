import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from '../../class/article';
import { ArticleServiceService } from 'src/app/features/services/article-service.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent {

  items!: Article[];
  /* [
    {
      titre:'Pension',
      content: 'Lorem ipsum dolor sit amet. Qui error odio 33 natus ullam est ullam sint est officiis dolorem aut voluptates dolorum. In excepturi eaque ut consequatur nobis et nobis aspernatur sed aspernatur modi. Et galisum numquam vel sint earum quo omnis voluptas.',
      image:'https://static.vecteezy.com/system/resources/thumbnails/005/857/332/small/funny-portrait-of-cute-corgi-dog-outdoors-free-photo.jpg'},
    {
      titre:'Elevage',
      content:' Ex culpa dignissimos sed magni rerum et rerum repellat sed ipsam repellendus ex cupiditate dicta. Est enim exercitationem ex consequuntur rerum et doloribus dolores hic galisum quia et inventore obcaecati vel doloremque quos. Quo minima rerum est eveniet amet sed accusamus laboriosam.',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJcwpPUvhpRJ88lUO1s6xlOIp64H8kgEHNA&usqp=CAU'
    },
    {
      titre:'Atelier Educatif',
      content:'Qui explicabo expedita est voluptates consequuntur qui velit pariatur aut explicabo unde in libero voluptas non amet culpa sit voluptas possimus. Et nemo illo qui error delectus et perferendis sequi et quia soluta. Et minus maxime et pariatur blanditiis est alias rerum id nobis ullam eum repudiandae dolor. Id blanditiis voluptas est temporibus ipsam nam reiciendis sint aut commodi omnis ut esse repudiandae.',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKJcwpPUvhpRJ88lUO1s6xlOIp64H8kgEHNA&usqp=CAU'
    }
  ]
  */
  constructor(private ArtService: ArticleServiceService)
  {
    ArtService.getData().subscribe(res =>
    {
       this.items=res
    });
  }


}


