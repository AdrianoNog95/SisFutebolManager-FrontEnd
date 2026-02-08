import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeslistComponent } from './timeslist.component';

describe('TimeslistComponent', () => {
  let component: TimeslistComponent;
  let fixture: ComponentFixture<TimeslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
