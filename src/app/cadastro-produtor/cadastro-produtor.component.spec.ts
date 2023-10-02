import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProdutorComponent } from './cadastro-produtor.component';

describe('CadastroProdutorComponent', () => {
  let component: CadastroProdutorComponent;
  let fixture: ComponentFixture<CadastroProdutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroProdutorComponent]
    });
    fixture = TestBed.createComponent(CadastroProdutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
