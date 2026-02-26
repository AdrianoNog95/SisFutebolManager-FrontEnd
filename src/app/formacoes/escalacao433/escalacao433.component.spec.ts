import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Escalacao433Component } from './escalacao433.component';

describe('Escalacao433Component', () => {
  let component: Escalacao433Component;
  let fixture: ComponentFixture<Escalacao433Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Escalacao433Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Escalacao433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
