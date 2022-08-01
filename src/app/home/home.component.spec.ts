import { HttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HomeService } from './home.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ { provide: HomeService } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    component = TestBed.inject(HomeComponent);
    TestBed.inject(HomeService);
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('HomeService', () => {
  let service: HomeService;
  let http: HttpClient
  beforeEach(() => { service = new HomeService(http); });
  let object: any;

  it('#findYearsWithMultipleWinners should return object', () => {
    expect(service.findYearsWithMultipleWinners()).toBe(object);
  });

  it('#findStudiosWithWinCount should return object', () => {
    expect(service.findStudiosWithWinCount()).toBe(object);
  });

  it('#findProducersWithLongestAndShortestIntervalBetweenWins should return object', () => {
    expect(service.findProducersWithLongestAndShortestIntervalBetweenWins()).toBe(object);
  });

  it('#findMovies should return object', () => {
    expect(service.findMovieWinnersByYear(2018)).toBe(object);
  });

});
