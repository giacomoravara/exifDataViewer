import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EfixDataComponent } from './efix-data.component';

describe('EfixDataComponent', () => {
  let component: EfixDataComponent;
  let fixture: ComponentFixture<EfixDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EfixDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EfixDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
