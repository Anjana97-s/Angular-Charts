import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgChartApiComponent } from './ng-chart-api.component';

describe('NgChartApiComponent', () => {
  let component: NgChartApiComponent;
  let fixture: ComponentFixture<NgChartApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgChartApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgChartApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
