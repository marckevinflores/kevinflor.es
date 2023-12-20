import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarfieldComponent } from './starfield.component';

describe('StarfieldComponent', () => {
  let component: StarfieldComponent;
  let fixture: ComponentFixture<StarfieldComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarfieldComponent]
    });
    fixture = TestBed.createComponent(StarfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
