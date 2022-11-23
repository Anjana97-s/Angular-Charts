import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleDonutchartComponent } from './google-donutchart.component';

describe('GoogleDonutchartComponent', () => {
  let component: GoogleDonutchartComponent;
  let fixture: ComponentFixture<GoogleDonutchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoogleDonutchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleDonutchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
