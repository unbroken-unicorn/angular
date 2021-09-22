import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeFormComponent } from './life-form.component';

describe('LifeFormComponent', () => {
  let component: LifeFormComponent;
  let fixture: ComponentFixture<LifeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
