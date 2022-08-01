import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

export class Movie {
  id?: number;
  year?: number;
  title?: string;
  winner?: boolean;
}

export class Pageable {
  movies?: Movie[];
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  pageable: Pageable = new Pageable();
  movies: Movie[] = [];
  winnerOptions: any[] = [];
  loading: boolean = true;
  numberOfElements: any;
  movieYear!: number;
  isWinner!: boolean;

  constructor(private listService: ListService) {}

  ngOnInit(): void {
    this.findMovies(0, 10, true);
    this.populateWinnerOptions();
  }

  populateObject(result: any) {
    this.movies = result.content;
    this.numberOfElements = result.numberOfElements;
  }

  populateWinnerOptions() {
    this.winnerOptions = [
      { label: 'Yes', value: true },
      { label: 'No', value: false },
    ];
  }

  filterByYear() {
	this.findMovies(0, 10, this.isWinner, this.movieYear);
  }

  filterByWinner(isWinner: boolean) {
	this.isWinner = isWinner;
	this.findMovies(0, 10, this.isWinner, this.movieYear);
  }

  findMovies(page?: number, size?: number, isWinner?: boolean, year?: number) {
      this.listService.findMovies(page, size, isWinner, year).subscribe(resp => {
          this.populateObject(resp)
          this.loading = false;
    });
  }
}
