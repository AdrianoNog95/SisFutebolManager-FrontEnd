import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadoresdetailsComponent } from './jogadoresdetails.component';

describe('JogadoresdetailsComponent', () => {
  let component: JogadoresdetailsComponent;
  let fixture: ComponentFixture<JogadoresdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogadoresdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogadoresdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
