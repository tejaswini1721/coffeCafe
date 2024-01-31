import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderHereComponent } from './order-here.component';

describe('OrderHereComponent', () => {
  let component: OrderHereComponent;
  let fixture: ComponentFixture<OrderHereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderHereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
