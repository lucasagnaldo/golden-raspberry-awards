import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

export class MultipleWinners {
  year?: number;
  total?: number;
}

export class Studio {
  name?: number;
  winCount?: number;
}

export class Producer {
    producer?: string;
    interval?: number;
    previousWin?: number;
    followingWin?: number;
}

export class Movie {
    id?: number;
    year?: number;
    title?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  winCounts: MultipleWinners[] = [];
  studios: Studio[] = [];
  producersLongestIntervalBetweenWins: Producer[] = [];
  producersShortestIntervalBetweenWins: Producer[] = [];
  movies: Movie[] = [];
  yearOfTheWinningFilm!: number;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.findYearsWithMultipleWinners();
    this.findStudiosWithWinCount();
    this.findProducersWithLongestAndShortestIntervalBetweenWins();
  }

  findYearsWithMultipleWinners(): void {
    this.homeService.findYearsWithMultipleWinners().subscribe((result: any) => {
      this.verifyYearsWithMultipleWinners(result['content']);
    });
  }

  findStudiosWithWinCount(): void {
    this.homeService.findStudiosWithWinCount().subscribe((result: any) => {
      this.verifyStudiosWithWinCount(result);
    });
  }

  findProducersWithLongestAndShortestIntervalBetweenWins(): void {
    this.homeService.findProducersWithLongestAndShortestIntervalBetweenWins().subscribe((result: any) => {
        this.verifyProducersWithLongestAndShortestIntervalBetweenWins(result);
      });
  }

  verifyYearsWithMultipleWinners(result: any) {
    let yearsWithMultipleWinners = [];
    let greaterAmount: number;
    let total = 1;

    for (let i = 0; i < result.length; i++) {
      if (i < result.length - 1 && result[i].year == result[i + 1].year) {
        total++;
      } else {
        yearsWithMultipleWinners.push({ year: result[i].year, total: total });
        total = 1;
      }
    }

    yearsWithMultipleWinners.sort((a, b) => (a.total > b.total ? -1 : 1));
    greaterAmount = yearsWithMultipleWinners[0]?.total;

    this.winCounts = yearsWithMultipleWinners.filter(
      (el) => el.total == greaterAmount
    );
  }

  verifyStudiosWithWinCount(result: any) {
    this.studios = result.studios?.sort((a: { winCount: number; }, b: { winCount: number; }) => (a.winCount > b.winCount ? -1 : 1)).slice(0, 3);
  }

  verifyProducersWithLongestAndShortestIntervalBetweenWins(result: any) {
    this.producersLongestIntervalBetweenWins = result.max ? result.max : null;
    this.producersShortestIntervalBetweenWins = result.min ? result.min : null;
  }

  searchMovieWinByYear() {
    this.homeService.findMovieWinnersByYear(this.yearOfTheWinningFilm).subscribe((result: any) => {
        this.movies = result;
    });

  }

}
