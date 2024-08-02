import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialProductCardComponent } from './financial-product-card.component';

describe('FinancialProductCardComponent', () => {
  let component: FinancialProductCardComponent;
  let fixture: ComponentFixture<FinancialProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
