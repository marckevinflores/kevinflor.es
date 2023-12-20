import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviconComponent } from './devicon.component';

describe('DeviconComponent', () => {
  let component: DeviconComponent;
  let fixture: ComponentFixture<DeviconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviconComponent]
    });
    fixture = TestBed.createComponent(DeviconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
