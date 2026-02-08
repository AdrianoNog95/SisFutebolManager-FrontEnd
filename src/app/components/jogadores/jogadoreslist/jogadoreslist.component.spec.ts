import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadoreslistComponent } from './jogadoreslist.component';

describe('JogadoreslistComponent', () => {
  let component: JogadoreslistComponent;
  let fixture: ComponentFixture<JogadoreslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JogadoreslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogadoreslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
