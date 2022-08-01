import { HttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { ListService } from './list.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let listService: ListService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ { provide: ListService } ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component = TestBed.inject(ListComponent);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ListService', () => {
  let service: ListService;
  let http: HttpClient
  beforeEach(() => { service = new ListService(http); });
  let object: any;

  it('#findMovies should return object', () => {
    expect(service.findMovies(2018)).toBe(object);
  });

});
