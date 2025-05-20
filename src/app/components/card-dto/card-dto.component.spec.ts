import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDtoComponent } from './card-dto.component';

describe('CardDtoComponent', () => {
  let component: CardDtoComponent;
  let fixture: ComponentFixture<CardDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardDtoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
