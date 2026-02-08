import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesdetailsComponent } from './timesdetails.component';

describe('TimesdetailsComponent', () => {
  let component: TimesdetailsComponent;
  let fixture: ComponentFixture<TimesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimesdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
