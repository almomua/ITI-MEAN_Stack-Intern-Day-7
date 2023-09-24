import { Component, OnInit } from '@angular/core';
import { MoviesServiceService } from '../movies-service.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
constructor(private moviesServ:MoviesServiceService){}
allMovies: any[] = []
  ngOnInit(): void {
      this.moviesServ.getAllMovies().subscribe({next:(response)=>{

        this.allMovies=response.results
        // this.allData=this.allMovies
      }
      })
  }

  imagePath: string = 'https://image.tmdb.org/t/p/w500';
  showMovieDetails:boolean=true
  toggleDetails(itemId:number){

    for(const item of this.allMovies){
      if(item.id==itemId)
      item.toggleDisc=!item.toggleDisc
    }

  }
}
