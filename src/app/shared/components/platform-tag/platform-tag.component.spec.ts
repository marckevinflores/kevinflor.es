import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformTagComponent } from './platform-tag.component';

describe('PlatformTagComponent', () => {
  let component: PlatformTagComponent;
  let fixture: ComponentFixture<PlatformTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlatformTagComponent]
    });
    fixture = TestBed.createComponent(PlatformTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
