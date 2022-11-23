import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleBarchartComponent } from './google-barchart.component';

describe('GoogleBarchartComponent', () => {
  let component: GoogleBarchartComponent;
  let fixture: ComponentFixture<GoogleBarchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleBarchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleBarchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
