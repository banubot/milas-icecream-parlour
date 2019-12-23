import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlComponent } from './bowl.component';

describe('BowlComponent', () => {
  let component: BowlComponent;
  let fixture: ComponentFixture<BowlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BowlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
