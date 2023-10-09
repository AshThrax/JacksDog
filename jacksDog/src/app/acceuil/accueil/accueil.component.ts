import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  public AccueilInfo: any;
  constructor(private http: HttpClient)
  {

  }
  ngOnInit(): void {
   const url:string ='assets/json/acceuil.json';
   this.http.get(url).subscribe(res=> {
    this.AccueilInfo=res
   }
);}

}
