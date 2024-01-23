import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotLightComponent } from './spot-light.component';

describe('SpotLightComponent', () => {
  let component: SpotLightComponent;
  let fixture: ComponentFixture<SpotLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpotLightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpotLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
