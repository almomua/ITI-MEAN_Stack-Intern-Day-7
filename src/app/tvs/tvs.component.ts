import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../movies-service.service';

@Component({
  selector: 'app-tvs',
  templateUrl: './tvs.component.html',
  styleUrls: ['./tvs.component.css']
})
export class TvsComponent implements OnInit {
  constructor(private tvServ:MoviesServiceService){}

  allTvs: any[] = []
  ngOnInit(): void {
    this.tvServ.getTv().subscribe({next:(response)=>{
      this.allTvs=response.results
    }})
  }
  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  toggleDetails(itemId:number){
    for(const item of this.allTvs){
      if(item.id==itemId)
      item.toggleDisc=!item.toggleDisc
    }

  }
}
