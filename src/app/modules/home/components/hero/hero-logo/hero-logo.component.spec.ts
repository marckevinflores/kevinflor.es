import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroLogoComponent } from './hero-logo.component';

describe('HeroLogoComponent', () => {
  let component: HeroLogoComponent;
  let fixture: ComponentFixture<HeroLogoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroLogoComponent]
    });
    fixture = TestBed.createComponent(HeroLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
