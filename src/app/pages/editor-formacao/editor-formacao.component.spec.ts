import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorFormacaoComponent } from './editor-formacao.component';

describe('EditorFormacaoComponent', () => {
  let component: EditorFormacaoComponent;
  let fixture: ComponentFixture<EditorFormacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditorFormacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorFormacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
